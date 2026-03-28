const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');

console.log('--- Firebase Diagnostic (Aggressive Cleaning) ---');

try {
  const envContent = fs.readFileSync('.env', 'utf8');
  const lines = envContent.split('\n');
  const env = {};
  lines.forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      env[parts[0].trim()] = parts.slice(1).join('=').trim();
    }
  });

  let rawKey = env['FIREBASE_PRIVATE_KEY'];
  if (!rawKey) throw new Error('FIREBASE_PRIVATE_KEY missing');

  // Strip surrounding quotes
  rawKey = rawKey.replace(/^["']|["']$/g, "").trim();

  // Extract the body between markers
  let body = rawKey;
  if (body.includes("-----BEGIN PRIVATE KEY-----")) {
    body = body.split("-----BEGIN PRIVATE KEY-----")[1];
  }
  if (body.includes("-----END PRIVATE KEY-----")) {
    body = body.split("-----END PRIVATE KEY-----")[0];
  }

  // AGGRESSIVE CLEANING: Remove ALL backslashes, newlines, and whitespace
  // This turns the body into a pure base64 string
  const cleanBody = body.replace(/\\n/g, "").replace(/\\/g, "").replace(/\s+/g, "");

  // Reconstruct correctly
  const finalKey = `-----BEGIN PRIVATE KEY-----\n${cleanBody}\n-----END PRIVATE KEY-----\n`;

  console.log('Original Raw Length:', rawKey.length);
  console.log('Clean Body Length:', cleanBody.length);
  console.log('Final Key Sample:', finalKey.substring(0, 60).replace(/\n/g, '[\\n]'));

  initializeApp({
    credential: cert({
      projectId: env['FIREBASE_PROJECT_ID'],
      clientEmail: env['FIREBASE_CLIENT_EMAIL'],
      privateKey: finalKey,
    }),
  });
  console.log('SUCCESS: Firebase Admin initialized successfully with Aggressive Cleaning!');
} catch (err) {
  console.error('FAILURE:', err.message);
  if (err.stack) console.error(err.stack);
}

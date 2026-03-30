import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app: App;

if (!getApps().length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (privateKey) {
    // 1. Remove literal quotes if the env variable was wrapped in them
    privateKey = privateKey.replace(/^["']|["']$/g, "").trim();
    
    // 2. Handle both escaped \n characters and literal newlines
    // This regex replaces the string sequence "\n" with an actual newline character
    privateKey = privateKey.replace(/\\n/g, "\n");
    
    // 3. Ensure the PEM has the correct structure (header/footer)
    if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
      privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}`;
    }
    if (!privateKey.includes("-----END PRIVATE KEY-----")) {
      privateKey = `${privateKey}\n-----END PRIVATE KEY-----\n`;
    }
  }

  if (!projectId || !clientEmail || !privateKey) {
    console.error("Missing Firebase Creds:", { projectId, clientEmail, hasKey: !!privateKey });
    throw new Error(
      "Missing Firebase Admin credentials. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables."
    );
  }

  app = initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);

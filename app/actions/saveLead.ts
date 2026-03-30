"use server";

import { db } from "@/lib/firebaseAdmin";

export type LeadData = {
  nome: string;
  email: string;
  profissao: string;
  maiorDificuldade: string;
  pagariaPorAutomacao: string;
};

export type SaveLeadResult =
  | { success: true; id: string }
  | { success: false; error: string };

export async function saveLead(data: LeadData): Promise<SaveLeadResult> {
  if (!data.nome?.trim() || !data.email?.trim()) {
    return { success: false, error: "Nome e e-mail são obrigatórios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "E-mail inválido." };
  }

  try {
    const normalizedEmail = data.email.trim().toLowerCase();

    const existing = await db
      .collection("leads")
      .where("email", "==", normalizedEmail)
      .limit(1)
      .get();

    if (!existing.empty) {
      return { success: false, error: "Este e-mail já está na lista de espera." };
    }

    const docRef = await db.collection("leads").add({
      ...data,
      email: normalizedEmail,
      createdAt: new Date().toISOString(),
    });

    return { success: true, id: docRef.id };
  } catch (err) {
    console.error("Failed to save lead:", err);
    return { success: false, error: "Erro ao salvar. Tente novamente." };
  }
}

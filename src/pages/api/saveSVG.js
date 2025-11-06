// src/pages/api/saveSVG.js
import { pb } from "../../lib/pocketbase.ts";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    console.log("Données reçues pour sauvegarde:", data);

    // Validation basique
    if (!data.code_svg) {
      return json({ success: false, error: "code_svg est requis" }, 400);
    }

    // Préparer les données pour PocketBase
    const recordData = {
      title: data.title || "Sans titre",
      code_svg: data.code_svg,
      chat_history: JSON.stringify(data.chat_history || []),
    };

    // Ajouter l'utilisateur si fourni
    if (data.user) {
      recordData.user = data.user;
    }

    // Créer l'enregistrement dans PocketBase
    const record = await pb.collection("SVG").create(recordData);

    console.log("SVG sauvegardé avec ID:", record.id);

    return json({
      success: true,
      id: record.id,
      record: record,
    });
  } catch (error) {
    console.error("Erreur lors de la sauvegarde du SVG:", error);
    return json(
      {
        success: false,
        error: error.message || "Erreur lors de la sauvegarde",
      },
      500
    );
  }
};

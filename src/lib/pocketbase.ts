import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// Interface pour l'utilisateur
interface Utilisateur {
  id: string;
  Nom: string;
  Prenom: string;
  Mail: string;
  Mot_de_passe?: string;
  created: string;
  updated: string;
}

export async function login(email: string, password: string) {
  try {
    // Rechercher l'utilisateur par email et mot de passe
    const resultList = await pb
      .collection("Utilisateur")
      .getList<Utilisateur>(1, 1, {
        filter: `Mail = "${email}" && Mot_de_passe = "${password}"`,
      });

    if (resultList.items.length === 0) {
      return {
        success: false,
        error: "Email ou mot de passe incorrect",
      };
    }

    const user = resultList.items[0];

    // Sauvegarder l'utilisateur dans le localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: user.id,
        Nom: user.Nom,
        Prenom: user.Prenom,
        Mail: user.Mail,
      })
    );

    return { success: true, user };
  } catch (error: any) {
    console.error("Erreur de connexion:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la connexion",
    };
  }
}

export async function register(
  email: string,
  password: string,
  nom: string,
  prenom: string
) {
  try {
    // Vérifier si l'email existe déjà
    const existingUsers = await pb
      .collection("Utilisateur")
      .getList<Utilisateur>(1, 1, {
        filter: `Mail = "${email}"`,
      });

    if (existingUsers.items.length > 0) {
      return {
        success: false,
        error: "Un compte avec cet email existe déjà",
      };
    }

    // Créer le nouvel utilisateur
    const data = {
      Nom: nom,
      Prenom: prenom,
      Mail: email,
      Mot_de_passe: password,
    };

    const record = await pb.collection("Utilisateur").create<Utilisateur>(data);

    // Sauvegarder l'utilisateur dans le localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: record.id,
        Nom: record.Nom,
        Prenom: record.Prenom,
        Mail: record.Mail,
      })
    );

    return { success: true, user: record };
  } catch (error: any) {
    console.error("Erreur d'inscription:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de l'inscription",
    };
  }
}

export function logout() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  const userStr = localStorage.getItem("currentUser");
  return userStr ? JSON.parse(userStr) : null;
}

export function isLoggedIn(): boolean {
  return getCurrentUser() !== null;
}

export { pb };

# 🎨 Guide de démarrage rapide - Générateur SVG IA

## ✅ Ce qui a été configuré

J'ai mis en place :

- ✅ Endpoint API `/api/generateSVG.js` pour générer des SVG avec l'IA
- ✅ Endpoint API `/api/saveSVG.js` pour sauvegarder dans PocketBase
- ✅ Page `/generator` avec interface complète
- ✅ Page `/gallery` pour afficher les SVG sauvegardés
- ✅ Fichiers `.env` et `.env.example` pour la configuration
- ✅ Traductions FR/EN dans `src/i18n/ui.js`
- ✅ Middleware pour l'internationalisation
- ✅ Package `openai` installé

## 🚀 3 étapes pour démarrer

### 1️⃣ Obtenir votre clé API OpenRouter (GRATUIT)

```bash
# 1. Allez sur https://openrouter.ai/keys
# 2. Créez un compte (gratuit)
# 3. Créez une clé API
# 4. Copiez la clé (commence par sk-or-v1-...)
```

### 2️⃣ Configurer le fichier .env

Ouvrez `.env` et mettez votre clé :

```env
OR_TOKEN=sk-or-v1-VOTRE_CLE_ICI  ← Remplacez ici !
OR_URL=https://openrouter.ai/api/v1
OR_MODEL=openai/gpt-4o-mini-2024-07-18
```

### 3️⃣ Créer la collection dans PocketBase

```bash
# 1. Lancez PocketBase (dans un terminal)
cd pocketbase
./pocketbase serve

# 2. Ouvrez http://127.0.0.1:8090/_/
# 3. Créez une collection "SVG" (Type: Base)
# 4. Ajoutez ces champs :
```

**Champs à créer :**

| Nom          | Type     | Required |
| ------------ | -------- | -------- |
| title        | Text     | ✅       |
| code_svg     | Text     | ✅       |
| chat_history | Text     | ❌       |
| user         | Relation | ❌       |

**Relations :**

- `user` → Collection: `Utilisateur`, Type: `Single`

**API Rules (pour la collection SVG) :**

```
List:   @request.auth.id != ""
View:   @request.auth.id != ""
Create: @request.auth.id != ""
Update: @request.auth.id = user.id
Delete: @request.auth.id = user.id
```

## 🎉 C'est prêt !

```bash
npm run dev
```

Allez sur : http://localhost:4321/generator

### Test rapide :

1. Entrez : **"A simple red circle"**
2. Cliquez sur "Générer le SVG"
3. Le SVG s'affiche ! ✨

## 📌 Pages disponibles

- `/generator` - Créer des SVG avec l'IA
- `/gallery` - Voir vos créations sauvegardées
- `/collection` - Boutique de lunettes (existant)
- `/personnalisation` - Personnaliser des lunettes (existant)

## 🐛 Problèmes courants

**❌ "OR_TOKEN manquant"**
→ Vérifiez le fichier `.env` (pas `.env.example` !)

**❌ "Failed to fetch"**
→ PocketBase n'est pas lancé (voir étape 3)

**❌ "Erreur d'enregistrement"**
→ Collection SVG non créée ou mauvais champs

**❌ Rien ne se passe**
→ Ouvrez la console du navigateur (F12) pour voir les erreurs

## 💡 Prompts d'exemple

Essayez ces prompts :

```
- A flat minimal icon of a sun with rays
- Modern logo with abstract geometric shapes
- Cute kawaii cat face, simple lines
- Isometric cube in gradient colors
- Minimalist mountain landscape silhouette
```

## 📚 Documentation complète

Voir `SETUP_GENERATOR.md` pour plus de détails.

---

**🎨 Bon coding !**

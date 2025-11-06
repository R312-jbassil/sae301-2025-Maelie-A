# Configuration du Générateur SVG avec IA

## 🚀 Étapes de configuration

### 1. Obtenir une clé API OpenRouter

1. Allez sur [OpenRouter](https://openrouter.ai/keys)
2. Créez un compte si vous n'en avez pas
3. Générez une nouvelle clé API
4. Copiez votre clé (format: `sk-or-v1-...`)

### 2. Configurer les variables d'environnement

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez `YOUR_API_KEY_HERE` par votre vraie clé API OpenRouter :

```env
OR_TOKEN=sk-or-v1-VOTRE_CLE_ICI
OR_URL=https://openrouter.ai/api/v1
OR_MODEL=openai/gpt-4o-mini-2024-07-18
```

**Note**: Le modèle `gpt-4o-mini` est gratuit et performant pour générer des SVG.

### 3. Créer la collection SVG dans PocketBase

1. Lancez PocketBase (si ce n'est pas déjà fait) :

   ```bash
   cd pocketbase
   ./pocketbase serve
   ```

2. Ouvrez l'interface admin : http://127.0.0.1:8090/_/

3. Créez une nouvelle collection nommée **SVG** avec les champs suivants :

   | Nom du champ   | Type       | Options                 |
   | -------------- | ---------- | ----------------------- |
   | `title`        | Plain text | Required                |
   | `code_svg`     | Plain text | Required                |
   | `chat_history` | Plain text | (pour historique JSON)  |
   | `user`         | Relation   | Optionnel → Utilisateur |

4. Configurez les **API Rules** :
   - **List/View**: `@request.auth.id != ""`
   - **Create**: `@request.auth.id != ""`
   - **Update/Delete**: `@request.auth.id = user.id`

### 4. Lancer l'application

```bash
npm run dev
```

Votre application sera accessible sur : http://localhost:4321

## 📝 Utilisation

### Générateur SVG

1. Allez sur `/generator`
2. Entrez une description en langage naturel (ex: "A flat minimal icon of a flower")
3. Cliquez sur "Générer le SVG"
4. Le SVG est généré et affiché
5. Vous pouvez :
   - Copier le code
   - Télécharger le fichier .svg
   - Enregistrer dans PocketBase (si connecté)

### Galerie

- Allez sur `/gallery` pour voir tous vos SVG sauvegardés
- Cliquez sur "Voir détails" pour éditer un SVG existant

## 🔧 Structure des fichiers créés

```
src/
├── pages/
│   ├── generator.astro          # Interface du générateur
│   ├── gallery/
│   │   └── index.astro          # Galerie des SVG
│   └── api/
│       ├── generateSVG.js       # Endpoint génération IA
│       └── saveSVG.js           # Endpoint sauvegarde PocketBase
└── i18n/
    └── ui.js                    # Traductions FR/EN

.env                             # Variables d'environnement (NE PAS COMMIT)
.env.example                     # Exemple de configuration
```

## 🌐 Modèles OpenRouter disponibles

Pour changer de modèle, modifiez `OR_MODEL` dans `.env` :

**Gratuits** :

- `openai/gpt-4o-mini-2024-07-18` (recommandé)
- `openai/gpt-3.5-turbo`
- `meta-llama/llama-3.1-8b-instruct:free`

**Payants** (meilleure qualité) :

- `openai/gpt-4o`
- `anthropic/claude-3.5-sonnet`

## ⚠️ Important

- **Ne commitez JAMAIS votre fichier `.env`** (déjà dans .gitignore)
- Vérifiez votre utilisation sur [OpenRouter Dashboard](https://openrouter.ai/activity)
- Les modèles gratuits ont des limites de rate-limiting

## 🐛 Résolution de problèmes

### "OR_TOKEN manquant"

→ Vérifiez que le `.env` contient bien `OR_TOKEN=sk-or-v1-...`

### "Aucun SVG détecté"

→ Le modèle n'a pas généré de SVG valide. Reformulez votre prompt ou changez de modèle.

### "Erreur lors de la sauvegarde"

→ Vérifiez que :

1. PocketBase tourne sur le port 8090
2. La collection SVG existe avec les bons champs
3. Vous êtes connecté

## 📚 Documentation

- [OpenRouter](https://openrouter.ai/docs)
- [Astro](https://docs.astro.build)
- [PocketBase](https://pocketbase.io/docs)

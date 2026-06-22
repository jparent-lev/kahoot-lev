# Quiz En place mon Loup 🎬

Outil de quiz interactif (style Kahoot!) pour le cinéma en plein air à la Place Limouloise.

---

## Structure des fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Vue participant (mobile) |
| `host.html` | Vue projecteur (grand écran) |
| `admin.html` | Panneau d'administration |
| `firebase-config.js` | **À configurer** — clés Firebase |
| `netlify.toml` | Configuration Netlify |

---

## Étape 1 — Créer une base de données Firebase (gratuit)

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. Clique **Créer un projet** → nom : `limoilou-quiz` → continuer
3. Désactive Google Analytics (optionnel) → **Créer le projet**
4. Dans le menu gauche : **Build → Realtime Database → Créer une base de données**
   - Choisis **États-Unis (us-central1)**
   - Sélectionne **Démarrer en mode test** → Activer
5. Dans le menu gauche : **Paramètres du projet** (engrenage) → **Vos applis**
   - Clique l'icône `</>` (Web) → nom : `quiz` → **Enregistrer l'appli**
   - Copie le bloc `firebaseConfig` qui apparaît

6. Ouvre `firebase-config.js` et remplace les valeurs par les tiennes :
```js
const FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "https://TON-PROJET-default-rtdb.firebaseio.com",
  ...
};
```

7. Change aussi le mot de passe admin si souhaité :
```js
const ADMIN_PASSWORD = "ton-mot-de-passe";
```

---

## Étape 2 — Règles de sécurité Firebase

Dans Firebase Console → Realtime Database → **Règles**, colle ceci :

```json
{
  "rules": {
    ".read": true,
    "participants": {
      ".write": true
    },
    "session": {
      ".write": false
    },
    "questions": {
      ".write": false
    }
  }
}
```

> Note : Pour les modifications admin (session/questions), l'accès en écriture est protégé par mot de passe côté client. Pour un niveau de sécurité supérieur, utilise Firebase Authentication.

---

## Étape 3 — Déployer sur Netlify

1. Va sur [netlify.com](https://app.netlify.com) → **Add new site → Deploy manually**
2. Glisse-dépose le dossier de ce projet
3. Netlify te donnera une URL du style `https://limoilou-quiz.netlify.app`
4. Mets à jour `APP_URL` dans `firebase-config.js` avec cette URL
5. Redéploie (même méthode)

---

## Utilisation le jour de l'événement

### Avant l'événement
1. Ouvre `[ton-site].netlify.app/admin.html` sur ton téléphone ou laptop
2. Connecte-toi avec le mot de passe admin
3. Ajoute toutes tes questions via le formulaire

### Pendant l'événement
1. **Projecteur** : ouvre `[ton-site].netlify.app/host.html` en plein écran (F11)
2. **Admin** : garde `admin.html` ouvert sur ton laptop ou téléphone
3. Dans admin → clique **Ouvrir la salle d'attente**
4. Le QR code s'affiche sur le projecteur → les participants scannent
5. Quand assez de gens sont connectés → clique **Lancer le quiz**
6. Chaque question se minutera automatiquement (selon la durée configurée)
7. Après chaque question : résultats automatiques → tu peux afficher le classement intermédiaire
8. À la fin : classement final avec les prix affiché sur le projecteur

### Récupérer les gagnants
Dans admin → section Participants → bouton **Exporter CSV**

---

## Scores (style Kahoot!)

- Bonne réponse rapide → jusqu'à **1000 pts**
- Formule : `1000 × (temps restant / durée totale)`
- Mauvaise réponse → **0 pts**

## Prix
| Rang | Prix |
|---|---|
| 🏅 1re place | Hoodie Limoilou en vrac |
| 🥈 2e place | T-shirt Limoilou en vrac |
| 🥉 3e place | Gourde Limoilou en vrac |

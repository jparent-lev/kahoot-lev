// ============================================================
// CONFIGURATION FIREBASE — À remplir avec vos propres clés
// ============================================================
// 1. Allez sur https://console.firebase.google.com
// 2. Créez un projet (ex: "limoilou-quiz")
// 3. Ajoutez une app Web (icône </>)
// 4. Copiez les valeurs de firebaseConfig ici
// 5. Dans "Build > Realtime Database", créez une base de données
//    (choisissez "Démarrer en mode test" pour commencer)
// ============================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdHPYEoEDUdaj7FTmWy1LyyA-N73CiPGE",
  authDomain: "limoilou-quiz.firebaseapp.com",
  databaseURL: "https://limoilou-quiz-default-rtdb.firebaseio.com",
  projectId: "limoilou-quiz",
  storageBucket: "limoilou-quiz.firebasestorage.app",
  messagingSenderId: "749337458187",
  appId: "1:749337458187:web:703366e9d92a8e1928390e"
  const ADMIN_PASSWORD = "Parj8005";
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
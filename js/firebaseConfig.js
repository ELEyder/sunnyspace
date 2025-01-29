import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyARwSYWD_euCV_2qQ4sL2S6Vrj_p_b0j_I",
  authDomain: "mediasenati.firebaseapp.com",
  databaseURL: "https://mediasenati-default-rtdb.firebaseio.com",
  projectId: "mediasenati",
  storageBucket: "mediasenati.firebasestorage.app",
  messagingSenderId: "147613346111",
  appId: "1:147613346111:web:a349302d624f17b5580b8a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyA-ZedvYNPNBlQyQy26d5PhbrO-IaLR5qA",
    authDomain: "signup-89c7a.firebaseapp.com",
    databaseURL: "https://signup-89c7a-default-rtdb.firebaseio.com",
    projectId: "signup-89c7a",
    storageBucket: "signup-89c7a.appspot.com",
    messagingSenderId: "987788007116",
    appId: "1:987788007116:web:02719a692d3d319ce91469",
    measurementId: "G-G3ZT9Y08KH"


};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



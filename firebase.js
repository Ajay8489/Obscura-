// Replace with your Firebase config
import {initializeApp} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig={};
const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);
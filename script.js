import {db} from './firebase.js';
import {collection,addDoc,getDocs} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const list=document.getElementById('list');
async function load(){list.innerHTML='';const s=await getDocs(collection(db,'spares'));s.forEach(d=>{const x=d.data();list.innerHTML+=`<div>${x.name} - Qty: ${x.qty}</div>`})}
window.saveSpare=async()=>{await addDoc(collection(db,'spares'),{name:name.value,qty:Number(qty.value)});name.value='';qty.value='';load();}
load();
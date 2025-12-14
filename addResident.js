import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";

async function addResident() {
  await addDoc(collection(db, "residents"), {
    firstName: "Juan",
    lastName: "Dela Cruz",
    gender: "Male",
    civilStatus: "Single",
    address: "Brgy. Mandurriao, Iloilo City",
    createdAt: new Date()
  });
console.log("Resident added successfully!");
}

addResident();

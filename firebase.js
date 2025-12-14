<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
  apiKey: "AIzaSyDrzV-LmADphvRyd7mjauW8SptfDE15tPQ",
  authDomain: "resident-management-syst-ee6e5.firebaseapp.com",
  projectId: "resident-management-syst-ee6e5",
  storageBucket: "resident-management-syst-ee6e5.firebasestorage.app",
  messagingSenderId: "868115849316",
  appId: "1:868115849316:web:3d9c33f25d181966997f71",
  measurementId: "G-4CV41X5NP7"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log("Firebase connected to Resident Record DB");
</script>

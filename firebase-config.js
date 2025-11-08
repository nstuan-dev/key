<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCpaFVgN8HTtj_2i8_r1AlUWuF-5kL8SJg",
    authDomain: "wallet-36897.firebaseapp.com",
    projectId: "wallet-36897",
    storageBucket: "wallet-36897.firebasestorage.app",
    messagingSenderId: "996233632733",
    appId: "1:996233632733:web:d55a4a9951dd0c9095b434",
    measurementId: "G-GCEHN4TBVC"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
</script>

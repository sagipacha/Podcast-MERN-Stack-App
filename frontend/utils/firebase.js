import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apiKey: "AIzaSyDQgC69TUGhxGcI4eMoaFzxgaT24IFJ5Ao",
authDomain: "podcast-mern-app-frontend.firebaseapp.com",
projectId: "podcast-mern-app-frontend",
storageBucket: "podcast-mern-app-frontend.appspot.com",
messagingSenderId: "869259492240",
appId: "1:869259492240:web:6cb880167d2ea106219115",
measurementId: "G-4LTJPCSZCJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
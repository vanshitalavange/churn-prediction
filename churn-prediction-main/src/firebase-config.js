import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXiTjWehB5CbHM5-GnRgW3v_kObnz-gew",
    authDomain: "churn-prediction-81402.firebaseapp.com",
    projectId: "churn-prediction-81402",
    storageBucket: "churn-prediction-81402.appspot.com",
    messagingSenderId: "954709460565",
    appId: "1:954709460565:web:0dbdd5731c97b8d64236dc",
    measurementId: "G-PF2PC9WYP5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
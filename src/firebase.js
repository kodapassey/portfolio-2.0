import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1YeseFEDFanfePaLjNd8ln3pPJryhOD0",
    authDomain: "koda-s-portfolio.firebaseapp.com",
    projectId: "koda-s-portfolio",
    storageBucket: "koda-s-portfolio.appspot.com",
    messagingSenderId: "760413305748",
    appId: "1:760413305748:web:6d7930c6aa4fc431252d81",
    measurementId: "G-XVL3ED01SC"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const galleryRef = ref(storage, 'Gallery')

// getDownloadURL(galleryRef)
//     .then((url) => {
//         const xhr = new XMLHttpRequest();
//         xhr.responseType = 'blob';
//         xhr.onload = (event) => {
//             const blob = xhr.response;
//         };
//         xhr.open('GET', url);
//         xhr.send();
//     });

export { storage }
export default app;
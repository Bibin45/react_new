import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBHUXCG1yzhxPK0rHR2eHdfKL8trQKPrsE",
    authDomain: "todo-app-fd8cb.firebaseapp.com",
    projectId: "todo-app-fd8cb",
    storageBucket: "todo-app-fd8cb.appspot.com",
    messagingSenderId: "950633220187",
    appId: "1:950633220187:web:7d9bdc716875fe0b3cd77e"
  };

const app =firebase.initializeApp(firebaseConfig);
const firestore=app.firestore();

export {app,firestore}
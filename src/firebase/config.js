import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTy7FwlzSGSkSVJ8-6I5Oyf7tWijH0azM",
  authDomain: "tresdelseis-9b9f8.firebaseapp.com",
  projectId: "tresdelseis-9b9f8",
  storageBucket: "tresdelseis-9b9f8.appspot.com",
  messagingSenderId: "834924441591",
  appId: "1:834924441591:web:2bb22de92cd21a320fc8f2"
};


const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}
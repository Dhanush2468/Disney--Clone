import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1qhciyCIIWc9Ki8qdZTUP5Pc3Z6tbFys",
  authDomain: "disney-plus-clone-1d9c9.firebaseapp.com",
  projectId: "disney-plus-clone-1d9c9",
  storageBucket: "disney-plus-clone-1d9c9.appspot.com",
  messagingSenderId: "594018774481",
  appId: "1:594018774481:web:9e9bffbca2c4ea502484f0",
  measurementId: "G-Q41SQG0P8K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
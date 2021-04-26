import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCylqi5rrIWucFaqSwenNWm7-5151eF9Yk",
    authDomain: "slack-clone-mern.firebaseapp.com",
    projectId: "slack-clone-mern",
    storageBucket: "slack-clone-mern.appspot.com",
    messagingSenderId: "623548013093",
    appId: "1:623548013093:web:5cd6506bccb390be26bdcc",
    measurementId: "G-BLB1DYV3SR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
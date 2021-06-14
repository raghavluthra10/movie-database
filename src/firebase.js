import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFFzGlJEYTGELTC0U1vBkBwdsGBijqnDY",
    authDomain: "movie-database-5cd29.firebaseapp.com",
    projectId: "movie-database-5cd29",
    storageBucket: "movie-database-5cd29.appspot.com",
    messagingSenderId: "695983806704",
    appId: "1:695983806704:web:0425a919f6ffab9c148a35"
  };

const db = firebase.initializeApp(firebaseConfig).firestore();

const auth = firebase.auth();

// const userState = firebase.auth().onAuthStateChanged(   (user) => {
//   if(user) {
//     console.log(user, ': logged in')
//   } else {
//     console.log( ' user logged out')
//   } 
// }
// )

export default db;
export { auth };
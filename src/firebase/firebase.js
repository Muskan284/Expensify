import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7CLwg-wG3K8enY1JwKSQl1LY6MIIfbAU",
    authDomain: "expensify-b8850.firebaseapp.com",
    databaseURL: "https://expensify-b8850.firebaseio.com",
    projectId: "expensify-b8850",
    storageBucket: "expensify-b8850.appspot.com",
    messagingSenderId: "310872660657"
  };
  firebase.initializeApp(config);

const database=firebase.database();
const googleprovider = new firebase.auth.GoogleAuthProvider();

/*database.ref('expenses').push({
    note:'sdfghjk',
    descrition:'asdfghjkllkjhgfdsdfgh',
    amount:100,
    createdat:10
})
*/


export {firebase,googleprovider, database as default};
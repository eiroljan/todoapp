import firebase from 'firebase';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDfrbgQhheRjqwf1ONDTH8d4C0ICr2eqm4",
    authDomain: "pahinumdom.firebaseapp.com",
    projectId: "pahinumdom",
    storageBucket: "pahinumdom.appspot.com",
    messagingSenderId: "939107066725",
    appId: "1:939107066725:web:a9ec39a31931870763778c"
};

class fire {
    init() {
        if(!firebase.app.length){
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user){

            }
            else{
                firebase.auth()
                        .signInAnonymously()
                        .catch(error =>{});
            }
        });
    }
}

export default fire;


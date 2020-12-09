import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfrbgQhheRjqwf1ONDTH8d4C0ICr2eqm4",
    authDomain: "pahinumdom.firebaseapp.com",
    projectId: "pahinumdom",
    storageBucket: "pahinumdom.appspot.com",
    messagingSenderId: "939107066725",
    appId: "1:939107066725:web:a9ec39a31931870763778c"
};

class fire { 
    constructor(callback){
        this.init(callback)
    }
    init(callback) {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null,user);
            }else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error =>{callback(error)});
            }
        });

    }
    getLists(callback){
        let ref = firebase.firestore().collection("user").doc(this.userId).collection("list");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists =[]

            snapshot.forEach(doc => {
                lists.push({id:doc.id, ...doc.data()})
            })
            callback(lists)
        })
    }
    get userId(){
        return firebase.auth().currentUser.uid;
    }
}

export default fire;
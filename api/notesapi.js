
import firebase from 'react-native-firebase';


export function addNotes(notes, addComplete) {

    firebase.firestore()
        .collection('Notes')
        .add({

            Title: notes.title,
            Info: notes.info,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then((data) => addComplete(data))
        .catch((error) => console.log(error));
}

export async function getNotes(notesRetrieved) {

    var noteList = [];

    var snapshot = await firebase.firestore()
        .collection('Notes')
        .orderBy('createdAt')
        .get()

    snapshot.forEach((doc) => {
        noteList.push(doc.data())
    });
    notesRetrieved(noteList);
}
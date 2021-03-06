import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC_XyMjHXvs3UM7lUKul0_MG0_IQ9GYdk4',
	authDomain: 'crwn-db-dfacf.firebaseapp.com',
	databaseURL: 'https://crwn-db-dfacf.firebaseio.com',
	projectId: 'crwn-db-dfacf',
	storageBucket: 'crwn-db-dfacf.appspot.com',
	messagingSenderId: '498375792852',
	appId: '1:498375792852:web:c96d5d6edffcb00e594341',
	measurementId: 'G-2KYDBR7HNF'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

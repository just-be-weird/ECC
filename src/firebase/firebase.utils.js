import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyArGUsCKX42LCU5bgBbTQh3ErMfcrVegB4',
	authDomain: 'ecc-db.firebaseapp.com',
	databaseURL: 'https://ecc-db.firebaseio.com',
	projectId: 'ecc-db',
	storageBucket: 'ecc-db.appspot.com',
	messagingSenderId: '820185885519',
	appId: '1:820185885519:web:62c809019384381084333a',
	measurementId: 'G-RGPWG0X411'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/*
To setup sign in with google, goto Authentication at console
> set up sign in method
> Google > edit > enabled > select email
*/

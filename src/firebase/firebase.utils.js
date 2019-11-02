import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './Firebase.config';

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

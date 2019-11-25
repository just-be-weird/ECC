import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './Firebase.config';
import collection from '../pages/collection/collection';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error while creating user, ', err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);//get a collection ref using passed collectionKey
  const batch = firestore.batch();//makes sure that entire operation is successful not partially
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);//batching the calls if anyone of calls gets failed, entire request will be rejected
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/*
To setup sign in with google, goto Authentication at console
> set up sign in method
> Google > edit > enabled > select email
*/

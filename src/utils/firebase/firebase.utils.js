import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWIOGZpp2KNYWP5q_NfKNv5w3GVbRQlzk",
  authDomain: "haze-alba.firebaseapp.com",
  projectId: "haze-alba",
  storageBucket: "haze-alba.appspot.com",
  messagingSenderId: "498793736949",
  appId: "1:498793736949:web:056c9d2da36cc667e473bc",
};

// Fue necesario cambiar una de las reglas de Firebase para autorizar el writing, (algo que estaba en false se cambió a true)

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objects.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done!");
};

export const getFeaturesAndDocuments = async () => {
  const collectionRef = collection(db, "features");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

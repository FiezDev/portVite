import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";
import config from "../config.json";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = config.Firebase;
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DBref = getFirestore(app);

const _firebase = () => {
  const [projectQuantity, setprojectQuantity] = useState(0);

  async function setProject(data: object, name: string) {
    try {
      await setDoc(doc(DBref, "Projects", name), data);
      console.log("Error When setProject");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getProject(refname: string) {
    const docRef = doc(DBref, "Projects", refname);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  async function getAllProject() {
    let quan = projectQuantity;
    const _query = query(collection(DBref, "Projects"));
    const querySnapshot = await getDocs(_query);
    querySnapshot.forEach((doc) => {
      quan++;
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data(), " => ", doc.data());
    });
    console.log(quan);
    return quan;
  }
  return { setProject, getProject, getAllProject };
};
export { _firebase, analytics };
export default firebase;

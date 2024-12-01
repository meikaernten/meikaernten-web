import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAaqU__dtGsig1gy3zwyIHN-Q6e5XoAVo",
  authDomain: "mei-kaernten.firebaseapp.com",
  projectId: "mei-kaernten",
  storageBucket: "mei-kaernten.firebasestorage.app",
  messagingSenderId: "860942128755",
  appId: "1:860942128755:web:1cdf2948cf0f02ef677c06"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function getRestaurantById(id) {
  try
  {
    const restaurantsRef = collection(firestore, 'restaurants');
    const restaurantRef = doc(restaurantsRef, id);
    const restaurantDoc = await getDoc(restaurantRef); // get contents of restaurant

    if (restaurantDoc.exists) {
        console.log('Document data:', restaurantDoc.data());
    } else {
        console.log('No such document!');
    }
  }
  catch (error) {
    console.error('Error fetching document:', error);
  }
}

getRestaurantById('uGpRG7MiqoOSlDLvHK6O');
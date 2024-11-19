import { db } from '../_utils/firebase';
import { collection, doc, getDocs, addDoc, deleteDoc, query } from 'firebase/firestore';

export const getItems = async (userId) => {
    try {
        const items = [];
        const docRef = collection(db, "users", userId, "items");
        const docSnap = await getDocs(docRef);
        docSnap.forEach(doc => {
                items.push({id: doc.id, ...doc.data()});
        })
        return items;
    }
    catch (error) {
        console.log("Error in getEvents:", error);
    }
}

export const addItem = async(userId, item) => {
    try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
    } catch (err) {
        console.log("Error in addEvent:", error);
    }   
}

export const deleteItem = async (userId, itemId) => {
    try {
        const docRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(docRef);
    }
    catch (error) {
        console.log("Error in deleteEvents: ", error);
    }
}
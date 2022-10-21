import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getBooks = () => {
  let book = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      const docRef = doc(db, "books", "nUGIa3aEVdkL6XAwtQZJ");

      //   let response = await getDoc(docRef);
      //   book.value = { id: response.id, ...response.data() };

      onSnapshot(docRef, (doc) => {
        book.value = { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { book, error, load };
};

export default getBooks;

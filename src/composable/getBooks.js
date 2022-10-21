import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getBooks = () => {
  let books = ref([]);
  let error = ref("");

  let load = () => {
    try {
      const colRef = collection(db, "books");

      // Query
      // let q = query(colRef, where("author", "===", "Aung Thu Zaw"));

      // onSnapshot(q, (snapshot) => {
      //   books.value = snapshot.docs.map((doc) => {
      //     return { id: doc.id, ...doc.data() };
      //   });
      // });

      let q = query(colRef, orderBy("created_at", "desc"));

      onSnapshot(q, (snapshot) => {
        books.value = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });

      // let response = await getDocs(colRef);
      // books.value = response.docs.map((doc) => {
      //   return { id: doc.id, ...doc.data() };
      // });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { books, error, load };
};

export default getBooks;

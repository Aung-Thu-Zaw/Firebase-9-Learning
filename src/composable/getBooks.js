import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getBooks = () => {
  let books = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      const colRef = collection(db, "books");

      let response = await getDocs(colRef);
      books.value = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      console.log(books.value);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { books, error, load };
};

export default getBooks;

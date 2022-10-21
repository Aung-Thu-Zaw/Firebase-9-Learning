<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 border border-3 p-5 my-5 shadow">
        <!-- Create Form  -->
        <form @submit.prevent="addDocument">
          <h3 class="fw-bold">Create Book</h3>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Book Name"
              v-model="bookName"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              name="description"
              cols="30"
              rows="5"
              class="form-control"
              placeholder="Enter Book Description"
              v-model="description"
            >
            </textarea>
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="author"
              placeholder="Author Name"
              v-model="author"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="price"
              placeholder="Price"
              v-model="price"
              required
            />
          </div>
          <div class="mb-5">
            <button class="btn btn-primary">Add a new Book</button>
          </div>
        </form>

        <!-- Delete Form  -->
        <form @submit.prevent="deleteDocument">
          <h3 class="fw-bold">Delete Book</h3>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="id"
              placeholder="Document ID"
              v-model="deleteID"
              required
            />
          </div>
          <div class="my-3">
            <button class="btn btn-danger">Delete Book</button>
          </div>
        </form>

        <!-- Update Form  -->
        <form @submit.prevent="updateDocument">
          <h3 class="fw-bold">Update Book</h3>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Document ID"
              v-model="updatedID"
              required
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary">Update Book</button>
          </div>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../firebase/config";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let bookName = ref("");
    let description = ref("");
    let author = ref("");
    let price = ref("");
    let deleteID = ref("");
    let updatedID = ref("");

    let addDocument = async () => {
      let colRef = collection(db, "books");
      await addDoc(colRef, {
        name: bookName.value,
        description: description.value,
        author: author.value,
        price: price.value,
        created_at: serverTimestamp(),
      });

      bookName.value = "";
      description.value = "";
      author.value = "";
      price.value = "";

      alert("Complete Add Document");
    };
    let deleteDocument = async () => {
      let docRef = doc(db, "books", deleteID.value);
      await deleteDoc(docRef);

      deleteID.value = "";
      alert("Complete Delete Document");
    };

    let updateDocument = async () => {
      let docRef = doc(db, "books", updatedID.value);
      await updateDoc(docRef, {
        name: "This book is updated",
      });

      alert("Complete Update Document");
    };
    return {
      bookName,
      description,
      author,
      price,
      deleteID,
      updatedID,
      addDocument,
      deleteDocument,
      updateDocument,
    };
  },
};
</script>

<style>
</style>
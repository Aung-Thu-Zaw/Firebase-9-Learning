<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 border border-3 p-5 my-5 shadow">
        <form @submit.prevent="addDocument">
          <h3 class="fw-bold">Create Book</h3>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="name"
              id=""
              aria-describedby="helpId"
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
                {{ description }}
              </textarea
            >
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="author"
              id=""
              aria-describedby="helpId"
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
              id=""
              aria-describedby="helpId"
              placeholder="Price"
              v-model="price"
              required
            />
          </div>
          <div class="mb-5">
            <button class="btn btn-primary">Add a new Book</button>
          </div>
        </form>
        <form @submit.prevent="deleteDocument">
          <h3 class="fw-bold">Delete Book</h3>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name="id"
              aria-describedby="helpId"
              placeholder="Document ID"
              v-model="deleteID"
              required
            />
          </div>
          <div class="my-3">
            <button class="btn btn-danger">Delete Book</button>
          </div>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { addDoc, collection, deleteDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/config";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let bookName = ref("");
    let description = ref("");
    let author = ref("");
    let price = ref("");
    let deleteID = ref("");

    let addDocument = async () => {
      let colRef = collection(db, "books");
      await addDoc(colRef, {
        name: bookName.value,
        description: description.value,
        author: author.value,
        price: price.value,
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
    return {
      bookName,
      description,
      author,
      price,
      deleteID,
      addDocument,
      deleteDocument,
    };
  },
};
</script>

<style>
</style>
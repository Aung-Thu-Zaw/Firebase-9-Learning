<template>
  <h1 class="text-primary">Firebase Learning</h1>
  <div>
    <BookForm></BookForm>
  </div>

  <div class="container border border-3 shadow p-3">
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-if="books.length">
      <BooksList :books="books"></BooksList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from "./components/Spinner";
import BooksList from "./components/BooksList";
import BookForm from "./components/ControlBookForm.vue";
import getBooks from "./composable/getBooks";

export default {
  components: {
    Spinner,
    BookForm,
    BooksList,
  },
  setup() {
    let { books, error, load } = getBooks();

    load();

    return { books, error };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

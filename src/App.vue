<template>
  <h1 class="text-primary">Firebase Learning</h1>

  <div>
    <ControlBookForm></ControlBookForm>
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
  <div>
    <SignUPForm />
  </div>
</template>

<script>
import Spinner from "./components/Spinner";
import BooksList from "./components/BooksList";
import ControlBookForm from "./components/ControlBookForm.vue";
import getBooks from "./composable/getBooks";
import SignUPForm from "./components/SignUpForm.vue";

export default {
  components: {
    Spinner,
    ControlBookForm,
    BooksList,
    SignUPForm,
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

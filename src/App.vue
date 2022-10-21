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
  <div class="container">
    <div class="row">
      <div class="col-6">
        <SignUPForm />
      </div>
      <div class="col-6">
        <LoginForm />
      </div>
    </div>

    <div class="d-grid">
      <button type="submit" @click="logoutAccount" class="btn btn-danger my-5">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import Spinner from "./components/Spinner";
import BooksList from "./components/BooksList";
import ControlBookForm from "./components/ControlBookForm.vue";
import getBooks from "./composable/getBooks";
import SignUPForm from "./components/SignUpForm.vue";
import LoginForm from "./components/LoginForm.vue";
import { signOut } from "@firebase/auth";
import { auth } from "./firebase/config";

export default {
  components: {
    Spinner,
    ControlBookForm,
    BooksList,
    SignUPForm,
    LoginForm,
  },
  setup() {
    let { books, error, load } = getBooks();
    load();
    let logoutAccount = async () => {
      let creditional = await signOut(auth);

      console.log("user sign out", creditional);
    };

    return { books, error, logoutAccount };
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

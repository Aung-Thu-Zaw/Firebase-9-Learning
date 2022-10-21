<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 border border-3 p-5 my-5 shadow">
        <form @submit.prevent="signUpAccount">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter Your Email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter Your Password"
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let signUpAccount = async () => {
      let creditional = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      console.log(creditional);
    };
    return { signUpAccount, email, password };
  },
};
</script>

<style>
</style>

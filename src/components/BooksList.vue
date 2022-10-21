<template>
  <div class="row">
      <div class="col-4" v-for="book in books" :key="book.id">
        <div class="card shadow">
          <img
            src="https://firebase.google.com/images/social.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body text-start">
            <h4 class="card-title fw-bold text-primary">
              Book Title - {{ book.title }}
            </h4>
            <h5 class="card-text">Author - {{ book.author }}</h5>
            <p class="fw-bold">Price - {{ book.price }}</p>

            <div>
              <button class="btn btn-outline-warning">Order Now</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
};
</script>

<style>
</style>

  
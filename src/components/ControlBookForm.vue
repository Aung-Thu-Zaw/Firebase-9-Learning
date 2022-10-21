<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 border border-3 p-5 my-5 shadow">
        <form>
          <h3 class="fw-bold">Create Book</h3>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Book Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Author Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Price"
            />
          </div>
          <div class="mb-5">
            <button class="btn btn-primary">Add a new Book</button>
          </div>

          <h3 class="fw-bold">Delete Book</h3>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Book ID"
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
export default {};
</script>

<style>
</style>
<template>
  <div class="books-new">
    <h1>New Book</h1>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <div class="form-group">
      <label>Title:</label>
      <input type="text" class="form-control" v-model="title" />
    </div>
    <div class="form-group">
      <label>Author</label>
      <input type="text" class="form-control" v-model="author_name" />
    </div>
    <div class="form-group">
      <label>Genre:</label>
      <input type="text" class="form-control" v-model="genre" />
    </div>
    <div class="form-group">
      <label>Image:</label>
      <input type="text" class="form-control" v-model="img_url" />
    </div>
    <div class="form-group">
      <label>Overview:</label>
      <input type="text" class="form-control" v-model="overview" />
    </div>
    <input v-on:click="createBook()" type="submit" class="btn btn-primary" value="Submit" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "",
      author_name: "",
      genre: "",
      img_url: "",
      overview: "",
      errors: [],
    };
  },

  // new book currently routes back home but this may need to change later. use booksnew in browser instead of books/new.
  // this should only be an admin feature by the time the app is complete.
  created: function () {},
  methods: {
    createBook: function () {
      console.log("book being created");
      var params = {
        title: this.title,
        author_name: this.author_name,
        genre: this.genre,
        img_url: this.img_url,
        overview: this.overview,
      };
      axios
        .post("/api/books/new", params)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

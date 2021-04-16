// Home.vue = All Books
<template>
  <div class="home">
    <div v-for="book in books" v-bind:key="book.id">
      <router-link v-bind:to="`books/${book.id}`">
        <h2>{{ book.title }}</h2>
        <p>{{ book.author_name }}</p>
        <p>{{ book.genre }}</p>
        <img v-bind:src="book.img_url" v-bind:alt="book.title" />
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      books: [],
    };
  },
  created: function () {
    this.indexBooks();
  },
  methods: {
    indexBooks: function () {
      axios.get("/api/books").then((response) => {
        this.books = response.data;
        console.log("all books:", this.books);
      });
    },
  },
};
</script>

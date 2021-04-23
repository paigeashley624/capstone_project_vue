<template>
  <div class="books-show">
    <div class="container">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author_name }} | {{ book.genre }}</p>
      <img v-bind:src="book.img_url" v-bind:alt="book.title" />
    </div>
    <div v-if="$parent.getUserId() == book.user_id">
      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
      <br />
      <button v-on:click="destroyBook(book)"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      book: {},
    };
  },
  created: function () {
    this.showBooks();
  },
  methods: {
    showBooks: function () {
      axios.get("/api/books/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.book = response.data;
      });
    },
    destroyBook: function (book) {
      axios.delete("/api/books/" + book.id).then(() => {
        console.log("delete works, yay!");
        this.$router.push("/books");
      });
    },
  },
};
</script>

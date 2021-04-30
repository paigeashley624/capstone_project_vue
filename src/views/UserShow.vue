<template>
  <div class="books-show">
    <div class="container">
      <div>
        <h2>{{ user.user_books }}</h2>
      </div>
      <!-- <p>{{ book.author_name }} | {{ book.genre }}</p>
      <img v-bind:src="book.img_url" v-bind:alt="book.title" />
      <p>{{ book.overview }}</p> -->
    </div>
    <!-- <div v-if="$parent.getUserId() == book.user_id">
      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
      <br />
      <button v-on:click="destroyBook(book)"></button>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    this.showUsers();
  },
  methods: {
    showUsers: function () {
      axios.get("/api/users/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
    destroyUserBooks: function (user) {
      axios.delete("/api/users/" + user.id).then(() => {
        console.log("delete works, yay!");
        this.$router.push("/users");
      });
    },
  },
};
</script>

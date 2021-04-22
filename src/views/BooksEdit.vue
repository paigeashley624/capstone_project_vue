<template>
  <div class="books-edit">
    <form v-on:submit="updateBook(book)">
      <h1>Update Book</h1>
      <!-- <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul> -->
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="book.title" />
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input type="text" class="form-control" v-model="book.author_name" />
      </div>
      <div class="form-group">
        <label>Genre:</label>
        <input type="text" class="form-control" v-model="book.genre" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="book.img_url" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      book: {},
      errors: [],
    };
  },

  created: function () {
    axios.get("api/books/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.book = response.data;
    });
  },
  methods: {
    updateBook: function (book) {
      console.log("Updating book");
      var params = {
        title: book.title,
        author_name: book.author_name,
        genre: book.genre,
        img_url: book.img_url,
      };
      axios
        .patch("/api/books/" + this.$route.params.id, params)
        .then(() => {
          this.$router.push("/books/" + this.book.id);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

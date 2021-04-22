<template>
  <div class="books-edit"></div>
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

<template>
  <div class="users-edit">
    <form v-on:submit="updateUser(user)">
      <h1>Update Users Books</h1>
      <!-- <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul> -->
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="user.user_books.title" />
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input type="text" class="form-control" v-model="user.user_books.author_name" />
      </div>
      <div class="form-group">
        <label>Genre:</label>
        <input type="text" class="form-control" v-model="user.user_books.genre" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="user.user_books.img_url" />
      </div>
      <div class="form-group">
        <label>Overview:</label>
        <input type="text" class="form-control" v-model="user.user_books.overview" />
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
      user: {},
      errors: [],
    };
  },

  created: function () {
    axios.get("api/users/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      console.log("Updating users book");
      var params = {
        title: user.title,
        author_name: user.author_name,
        genre: user.genre,
        img_url: user.img_url,
        overview: user.overview,
      };
      axios
        .patch("/api/users/" + this.$route.params.id, params)
        .then(() => {
          this.$router.push("/users/" + this.user.id);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

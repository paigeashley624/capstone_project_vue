<template></template>

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

<template>
  <div class="user-show">
    <!-- <div class="container">
      <div v-for="book in user.user_books" :key="book.id">
        <router-link v-bind:to="`books/${book.id}`">
          <h2>{{ book.book.title }}</h2>
        </router-link>
        <p>{{ book.book.author_name }} | {{ book.book.genre }}</p>
        <img v-bind:src="book.book.img_url" v-bind:alt="book.book.title" />
        <p>{{ book.book.overview }}</p>
      </div>
    </div>
    <div v-if="$parent.getUserId() == book.user_id">
      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
      <br />
      <button v-on:click="destroyBook(book)"></button>
    </div> -->
    <!-- Product Shop Section Begin -->
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad">
      <div class="container">
        <select name="bookSort" id="bookSort">
          <option value="read">Read</option>
          <option value="reading">Reading</option>
          <option value="future read">Future Read</option>
        </select>
        <div class="row">
          <div class="col-lg-9 order-1 order-lg-2">
            <div class="product-list">
              <div class="row">
                <div v-for="book in user.user_books" :key="book.id" class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img v-bind:src="book.book.img_url" v-bind:alt="book.book.title" />
                      <!-- <div class="icon">
                        <i class="icon_heart_alt"></i>
                      </div> -->
                      <!-- <ul> -->

                      <!-- <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li> -->
                      <!-- <li class="quick-view"><a href="#">+ Quick View</a></li> -->
                      <!-- <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li> -->
                      <!-- </ul> -->
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">{{ book.book.genre }}</div>
                      <!-- <router-link v-bind:to="`${showBook()}`"> -->
                      <!-- unable to get the correct route righ now  -->
                      <h5>{{ book.book.title }}</h5>
                      <!-- </router-link> -->
                      <div class="product-price">
                        {{ book.book.author_name }}
                        <h6>{{ book.status }}</h6>
                      </div>
                    </div>
                    <!-- <div v-if="$parent.getUserId() == book.user_id">
                      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
                      <br />
                      <button v-on:click="destroyBook(book)"></button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <!-- Product Shop Section End -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      book: {},
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

    // added to try to get the book to route to its own show page when clicked. Incomplete
    showBook: function () {
      axios.get("/api/books/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.book = response.data;
      });
    },
  },
};
</script>

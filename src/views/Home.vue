// Home.vue = All Books
<template>
  <div class="home">
    <!-- Search by title:
    <input v-model="searchFilter" /> -->

    <!-- <div v-for="book in books" v-bind:key="book.id">
      <router-link v-bind:to="`books/${book.id}`">
        <h2>{{ book.title }}</h2>
        <p>{{ book.author_name }}</p>
        <p>{{ book.genre }}</p>
        <img v-bind:src="book.img_url" v-bind:alt="book.title" />
      </router-link>
    </div> -->

    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-3 col-md-2">
            <div class="logo">
              <a href="/">
                <img src="img/newlogo1.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="advanced-search">
              <!-- <button type="button" class="category-btn">All Categories</button> -->
              <div class="input-group">
                <input
                  v-model="searchFilter"
                  type="text"
                  placeholder="Find your next book by: genre, title, or author "
                />
                <!-- <button type="button"><i class="ti-search"></i></button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <div class="product-large set-bg" data-setbg="img/products/readingbook.jpg">
              <h2>BookStash</h2>
              <a href="#">Discover New Books</a>
            </div>
          </div>

          <!-- carousel start -->
          <!-- <div class="col-lg-2 offset-lg-1">
            <div
              class="product-slider owl-carousel owl-loaded owl-drag"
              v-for="book in filterBy(books, searchFilter, 'title', 'genre', 'author_name')"
              v-bind:key="book.id"
            >
              <div class="product-item">
                <div class="pi-pic">
                  <router-link v-bind:to="`books/${book.id}`">
                    <img v-bind:src="book.img_url" v-bind:alt="book.title" />
                  </router-link>

                  <div class="icon">
                    <i class="icon_heart_alt"></i>
                  </div>
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{{ book.genre }}</div>
                  <router-link v-bind:to="`books/${book.id}`">
                    <h5>{{ book.title }}</h5>
                  </router-link>
                  <div class="product-price">
                    {{ book.author_name }}
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- carousel end  -->
          <div class="col-lg-7 order-1 order-lg-3 offset-lg-1">
            <div>
              <div class="product-list">
                <div class="row">
                  <div
                    v-for="book in filterBy(books, searchFilter, 'title', 'genre', 'author_name')"
                    v-bind:key="book.id"
                  >
                    <div class="product-item">
                      <div class="pi-pic">
                        <router-link v-bind:to="`books/${book.id}`">
                          <img v-bind:src="book.img_url" v-bind:alt="book.title" />
                        </router-link>
                        <div class="icon">
                          <i class="icon_heart_alt"></i>
                        </div>
                        <ul>
                          <!-- <li class="w-icon active">
                            <a href="#"><i class="icon_bag_alt"></i></a>
                          </li> -->
                          <li class="quick-view">
                            <button v-on:click="addToStash(book)">+ Add to Stash</button>
                          </li>
                          <!-- <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li> -->
                        </ul>
                      </div>
                      <div class="pi-text">
                        <div class="catagory-name">{{ book.genre }}</div>
                        <router-link v-bind:to="`books/${book.id}`">
                          <h5>{{ book.title }}</h5>
                        </router-link>
                        <div class="product-price">
                          {{ book.author_name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="loading-more">
                <i class="icon_loading"></i>
                <a href="#">Loading More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Women Banner Section End -->

    <!-- Product Shop Section Begin -->
    <!-- <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 order-1 order-lg-2 offset-lg-1">
            <div class="product-list">
              <div class="row">
                <div
                  v-for="book in filterBy(books, searchFilter, 'title', 'genre', 'author_name')"
                  v-bind:key="book.id"
                >
                  <div class="product-item">
                    <div class="pi-pic">
                      <img v-bind:src="book.img_url" v-bind:alt="book.title" />
                      <div class="icon">
                        <i class="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                        <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">{{ book.genre }}</div>
                      <router-link v-bind:to="`books/${book.id}`">
                        <h5>{{ book.title }}</h5>
                      </router-link>
                      <div class="product-price">
                        {{ book.author_name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Product Shop Section End -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      books: [],
      searchFilter: "",
    };
  },
  mixins: [Vue2Filters.mixin],

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

    // trying to add in order to add a book to a users account. Incomplete
    addToStash: function (book) {
      console.log("book being added to stash");

      var params = {
        user_id: localStorage.getItem("user_id"),
        book_id: book.id,
        status: "Future Read",
      };

      // axios post are sending to the backend
      axios.post("/api/user_books/", params).catch((error) => console.log(error.response));
    },
  },
};
</script>

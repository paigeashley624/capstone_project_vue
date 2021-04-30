// Home.vue = All Books
<template>
  <div class="home">
    <!-- <div v-for="book in books" v-bind:key="book.id">
      <router-link v-bind:to="`books/${book.id}`">
        <h2>{{ book.title }}</h2>
        <p>{{ book.author_name }}</p>
        <p>{{ book.genre }}</p>
        <img v-bind:src="book.img_url" v-bind:alt="book.title" />
      </router-link>
    </div> -->
    <!-- Women Banner Section Begin -->
    <div class="product-slider owl-carousel owl-loaded owl-drag">
      <section class="women-banner spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div class="product-large set-bg" data-setbg="img/products/readingbook.jpg">
                <h2>BookStash</h2>
                <!-- <router-link> -->
                <a href="#">Discover New Books</a>
                <!-- </router-link> -->
              </div>
            </div>
            <div class="col-lg-8 offset-lg-1">
              <div class="filter-control">
                <ul>
                  <li class="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div class="product-slider owl-carousel">
                <div class="product-item" v-for="book in books" v-bind:key="book.id">
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
      </section>
    </div>
    <!-- Women Banner Section End -->
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

<template>
  <!-- <div class="books-show">
    <div class="container">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author_name }} | {{ book.genre }}</p>
      <img v-bind:src="book.img_url" v-bind:alt="book.title" />
      <p>{{ book.overview }}</p>
    </div>
    <div v-if="$parent.getUserId() == book.user_id">
      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
      <br />
      <button v-on:click="destroyBook(book)"></button>
    </div>
  </div> -->

  <!-- Product Shop Section Begin -->
  <div class="books-show">
    <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
            <div class="filter-widget">
              <h4 class="fw-title">Overview</h4>
              <p>{{ book.overview }}</p>
            </div>
          </div>
          <div class="col-lg-9 order-1 order-lg-2">
            <div class="product-show-option">
              <div class="row">
                <div class="col-lg-7 col-md-7"></div>
              </div>
            </div>
            <div class="product-list">
              <div class="row">
                <div class="col-lg-3 col-sm-6">
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
                      <a href="#">
                        <h5>{{ book.title }}</h5>
                      </a>
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
    </section>
    <!-- Product Shop Section End -->
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

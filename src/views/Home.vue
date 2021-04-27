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
    <section class="women-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <div class="product-large set-bg" data-setbg="img/products/women-large.jpg">
              <h2>Women’s</h2>
              <a href="#">Discover More</a>
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
                  <!-- <div class="product-price">
                    $14.00
                    <span>$35.00</span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Women Banner Section End -->
    <!-- Latest Blog Section Begin -->
    <section class="latest-blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>From The Blog</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-blog">
              <img src="img/latest-1.jpg" alt="" />
              <div class="latest-text">
                <div class="tag-list">
                  <div class="tag-item">
                    <i class="fa fa-calendar-o"></i>
                    May 4,2019
                  </div>
                  <div class="tag-item">
                    <i class="fa fa-comment-o"></i>
                    5
                  </div>
                </div>
                <a href="#">
                  <h4>The Best Street Style From London Fashion Week</h4>
                </a>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-blog">
              <img src="img/latest-2.jpg" alt="" />
              <div class="latest-text">
                <div class="tag-list">
                  <div class="tag-item">
                    <i class="fa fa-calendar-o"></i>
                    May 4,2019
                  </div>
                  <div class="tag-item">
                    <i class="fa fa-comment-o"></i>
                    5
                  </div>
                </div>
                <a href="#">
                  <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                </a>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-blog">
              <img src="img/latest-3.jpg" alt="" />
              <div class="latest-text">
                <div class="tag-list">
                  <div class="tag-item">
                    <i class="fa fa-calendar-o"></i>
                    May 4,2019
                  </div>
                  <div class="tag-item">
                    <i class="fa fa-comment-o"></i>
                    5
                  </div>
                </div>
                <a href="#">
                  <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                </a>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              </div>
            </div>
          </div>
        </div>
        <div class="benefit-items">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-benefit">
                <div class="sb-icon">
                  <img src="img/icon-1.png" alt="" />
                </div>
                <div class="sb-text">
                  <h6>Free Shipping</h6>
                  <p>For all order over 99$</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-benefit">
                <div class="sb-icon">
                  <img src="img/icon-2.png" alt="" />
                </div>
                <div class="sb-text">
                  <h6>Delivery On Time</h6>
                  <p>If good have prolems</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-benefit">
                <div class="sb-icon">
                  <img src="img/icon-1.png" alt="" />
                </div>
                <div class="sb-text">
                  <h6>Secure Payment</h6>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest Blog Section End -->
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

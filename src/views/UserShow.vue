<template>
  <div class="books-show">
    <div class="container">
      <div v-for="book in user.user_books" :key="book.id">
        <h2>{{ book.book.title }}</h2>
        <p>{{ book.book.author_name }} | {{ book.book.genre }}</p>
        <img v-bind:src="book.book.img_url" v-bind:alt="book.book.title" />
        <p>{{ book.book.overview }}</p>
      </div>
    </div>
    <div v-if="$parent.getUserId() == book.user_id">
      <router-link v-bind:to="`/books/${book.id}/edit`"></router-link>
      <br />
      <button v-on:click="destroyBook(book)"></button>
    </div>
  </div>
  <!-- Product Shop Section Begin -->
  <!-- <section class="product-shop spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
          <div class="filter-widget">
            <h4 class="fw-title">Categories</h4>
            <ul class="filter-catagories">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
            </ul>
          </div>
          might use this below section 
          <div class="filter-widget">
            <h4 class="fw-title">Brand</h4>
            <div class="fw-brand-check">
              <div class="bc-item">
                <label for="bc-calvin">
                  Calvin Klein
                  <input type="checkbox" id="bc-calvin" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="bc-item">
                <label for="bc-diesel">
                  Diesel
                  <input type="checkbox" id="bc-diesel" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="bc-item">
                <label for="bc-polo">
                  Polo
                  <input type="checkbox" id="bc-polo" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="bc-item">
                <label for="bc-tommy">
                  Tommy Hilfiger
                  <input type="checkbox" id="bc-tommy" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          
          
          
        </div>
        <div class="col-lg-9 order-1 order-lg-2">
          <div class="product-show-option">
            <div class="row">
              <div class="col-lg-7 col-md-7">
                <div class="select-option">
                  <select class="sorting">
                    <option value="">Default Sorting</option>
                  </select>
                  <select class="p-show">
                    <option value="">Show:</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 text-right">
                <p>Show 01- 09 Of 36 Product</p>
              </div>
            </div>
          </div>
          <div class="product-list">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-1.jpg" alt="" />
                    <div class="sale pp-sale">Sale</div>
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
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">
                      $14.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-2.jpg" alt="" />
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
                    <div class="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div class="product-price">
                      $13.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-3.jpg" alt="" />
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
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div class="product-price">
                      $34.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-4.jpg" alt="" />
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
                    <div class="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Microfiber Wool Scarf</h5>
                    </a>
                    <div class="product-price">
                      $64.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-5.jpg" alt="" />
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
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Men's Painted Hat</h5>
                    </a>
                    <div class="product-price">
                      $44.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-6.jpg" alt="" />
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
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div class="product-price">
                      $34.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-7.jpg" alt="" />
                    <div class="sale pp-sale">Sale</div>
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
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">
                      $64.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-8.jpg" alt="" />
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
                    <div class="catagory-name">Coat</div>
                    <a href="#">
                      <h5>2 Layer Windbreaker</h5>
                    </a>
                    <div class="product-price">
                      $44.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/products/product-9.jpg" alt="" />
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
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div class="product-price">
                      $34.00
                      <span>$35.00</span>
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
  </section> -->
  <!-- Product Shop Section End -->
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
  },
};
</script>

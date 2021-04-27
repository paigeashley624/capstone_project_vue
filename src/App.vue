<template>
  <div id="app">
    <!-- original nav bar before theme install  -->
    <!-- <div id="nav">

      <span>
        <router-link to="/">Home</router-link>
      </span>
      |
      <span>
        <router-link to="/about">About</router-link>
      </span>
      |
      <span v-if="!isLoggedIn()">
        <router-link to="/signup">Signup</router-link>
      </span>
      |
      <span v-if="!isLoggedIn()">
        <router-link to="/login">Login</router-link>
      </span>
      |
      <span>
        <router-link to="/logout">Logout</router-link>
      </span>
      |
      <span>
        <router-link to="booksnew">Create New Book</router-link>
      </span>
    </div> -->
    <!-- end of original nav bar before theme install  -->

    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left"></div>
          <div class="ht-right">
            <span v-if="!isLoggedIn()">
              <a href="/login" class="login-panel">
                <i class="fa fa-user"></i>
                Login
              </a>
            </span>
            <span v-else>
              <a href="/logout" class="login-panel">
                <i class="fa fa-user"></i>
                Logout
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <div class="container">
          <div class="nav-depart">
            <!-- Drop down bar  -->
            <!-- <div class="depart-btn">
              <i class="ti-menu"></i>
              <span>All departments</span>
              <ul class="depart-hover">
                <li class="active"><a href="#">Women’s Clothing</a></li>
                <li><a href="#">Men’s Clothing</a></li>
                <li><a href="#">Underwear</a></li>
                <li><a href="#">Kid's Clothing</a></li>
                <li><a href="#">Brand Fashion</a></li>
                <li><a href="#">Accessories/Shoes</a></li>
                <li><a href="#">Luxury Brands</a></li>
                <li><a href="#">Brand Outdoor Apparel</a></li>
              </ul>
            </div> -->
          </div>
          <nav class="nav-menu mobile-menu">
            <ul>
              <li class="active"><router-link to="/">Home</router-link></li>
              <!-- <li><a href="./shop.html">test</a></li> -->
              <li>
                <a href="#">Stash</a>
                <ul class="dropdown">
                  <li><a href="#">Men's</a></li>
                  <li><a href="#">Women's</a></li>
                  <li><a href="#">Kid's</a></li>
                </ul>
              </li>
              <li><a href="./blog.html">Browse</a></li>
              <li><a href="./contact.html">Contact</a></li>
              <li>
                <span v-if="!isLoggedIn()">
                  <router-link to="/signup">Signup</router-link>
                  <ul class="dropdown">
                    <li><a href="./blog-details.html">Blog Details</a></li>
                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                    <li><a href="./check-out.html">Checkout</a></li>
                    <li><a href="./faq.html">Faq</a></li>
                    <li><a href="./register.html">Register</a></li>
                    <li><a href="./login.html">Login</a></li>
                  </ul>
                </span>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
    <!-- Header End -->

    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
      <div class="container">
        <div class="logo-carousel owl-carousel">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-2.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-3.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-4.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Partner Logo Section End -->
    <router-view />
    <!-- Footer Section Begin -->
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="footer-left">
              <div class="footer-logo">
                <a href="#"><img src="img/footer-logo.png" alt="" /></a>
              </div>
              <ul>
                <li>Address: 124 Conch Street, Bikini Bottom</li>
                <li>Phone: 678.999.8212</li>
                <li>Email: info@bookstash.com</li>
              </ul>
              <!-- <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div> -->
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1">
            <div class="footer-widget">
              <h5>Information</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <!-- <li><a href="#">Checkout</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Serivius</a></li> -->
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="footer-widget">
              <h5>My Account</h5>
              <ul>
                <li><a href="#">My Account</a></li>
                <!-- <li><a href="#">Contact</a></li>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Shop</a></li> -->
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="newslatter-item">
              <h5>Join Our Newsletter Now</h5>
              <p>Get E-mail updates with the newest personalized book recommendations.</p>
              <form action="#" class="subscribe-form">
                <input type="text" placeholder="Enter Your Mail" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Section End -->
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

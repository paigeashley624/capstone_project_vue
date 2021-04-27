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

    <!-- Page Preloder (page was not loading with this portion, possibly delete) -->
    <!-- <div id="preloder">
      <div class="loader"></div>
    </div> -->

    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left">
            <!-- <div class="mail-service">
              <i class="fa fa-envelope"></i>
              hello.colorlib@gmail.com
            </div>
            <div class="phone-service">
              <i class="fa fa-phone"></i>
              +65 11.188.888
            </div> -->
          </div>
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
      <div class="container">
        <div class="inner-header">
          <div class="row">
            <div class="col-lg-2 col-md-2">
              <div class="logo">
                <a href="/">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-7 col-md-7">
              <div class="advanced-search">
                <button type="button" class="category-btn">Search By:</button>
                <div class="input-group">
                  <input type="text" placeholder="What do you need?" />
                  <button type="button"><i class="ti-search"></i></button>
                </div>
              </div>
            </div>
            <div class="col-lg-3 text-right col-md-3">
              <ul class="nav-right">
                <li class="heart-icon">
                  <a href="#">
                    <i class="icon_heart_alt"></i>
                    <span>1</span>
                  </a>
                </li>
                <li class="cart-icon">
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                    <span>3</span>
                  </a>
                  <div class="cart-hover">
                    <div class="select-items">
                      <table>
                        <tbody>
                          <tr>
                            <td class="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                            <td class="si-text">
                              <div class="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td class="si-close">
                              <i class="ti-close"></i>
                            </td>
                          </tr>
                          <tr>
                            <td class="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                            <td class="si-text">
                              <div class="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td class="si-close">
                              <i class="ti-close"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="select-total">
                      <span>total:</span>
                      <h5>$120.00</h5>
                    </div>
                    <div class="select-button">
                      <a href="#" class="primary-btn view-card">VIEW CARD</a>
                      <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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

    <!-- Latest Blog Section Begin -->
    <!-- <section class="latest-blog spad">
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
    </section> -->
    <!-- Latest Blog Section End -->

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

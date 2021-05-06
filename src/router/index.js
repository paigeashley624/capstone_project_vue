import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import BooksEdit from "../views/BooksEdit.vue";
import BooksNew from "../views/BooksNew.vue";
import BooksShow from "../views/BooksShow.vue";
import UserEdit from "../views/UserEdit.vue";
import UserShow from "../views/UserShow.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/",name: "Home",component: Home, },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },

  { path: "/books/:id/edit", name: "books-edit", component: BooksEdit },
  { path: "/books/new", name: "books-new", component: BooksNew },
  { path: "/books/:id", name: "books-show", component: BooksShow },


  { path: "/users/:id/edit", name: "users-edit", component: UserEdit },
  { path: "/users/:id", name: "user-show", component: UserShow },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

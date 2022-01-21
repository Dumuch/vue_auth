import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import About from "../components/About";

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
  const currentUser = firebase.auth().currentUser;

  if (!currentUser) {
    next("login");
    return;
  } else next();
};

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: ifAuthenticated,
    },
    {
      path: "/about",
      name: "About",
      component: About,
      beforeEnter: ifAuthenticated,
    },
  ],
});

export default router;

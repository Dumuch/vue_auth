import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/",
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
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("login");
  } else if (!requiresAuth && currentUser) {
    next("dashboard");
  } else next();
});

export default router;

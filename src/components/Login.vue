<template>
  <div>
    <h3>Войти</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="password" /><br />
    <button @click="logIn">Войти</button>
    <p>
      <router-link to="/register">зарегистироваться</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    logIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.replace("dashboard"))
        .catch((e) => (alert(e.message), (this.error = e.message)));
    },
  },
};
</script>

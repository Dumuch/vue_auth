<template>
  <div>
    <p>Регистрация нового пользователя</p>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="register">Зарегистироваться</button>
    <span>или <router-link to="/login">войти</router-link>.</span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    register: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.replace("dashboard"))
        .catch((e) => (alert(e.message), (this.error = e.message)));
    },
  },
};
</script>

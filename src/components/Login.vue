<template>
  <div class="row d-flex justify-content-center">
    <div class="col-6">
      <h3 class="fs-3 mb-4">Войти</h3>
      <div class="input-group mb-3">
        <input
          class="form-control"
          type="text"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="input-group mb-3">
        <input
          class="form-control"
          type="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button class="btn btn-success" @click="logIn">Войти</button>
      <p>
        <router-link class="btn btn-link" to="/register"
          >зарегистироваться</router-link
        >
      </p>
    </div>
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

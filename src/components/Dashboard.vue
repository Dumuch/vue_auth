<template>
  <div class="row d-flex jasity-content-center">
    <div class="col-6">
      <p class="fs-3 mb-4">Панель управления</p>
      <button class="btn btn-danger" @click="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>

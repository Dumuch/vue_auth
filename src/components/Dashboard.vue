<template>
  <div>
    <h1>Панель управления</h1>
    <button @click="logout">Выйти</button>
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

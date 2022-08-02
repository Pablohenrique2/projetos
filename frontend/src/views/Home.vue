<template lang="">
  <div class="home text-center mt-5">
    <h1>Bem vindo {{ user.username }}</h1>
    <img src="@/assets/img/home.svg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      users: [],
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let lsUsers = localStorage.users;
      this.users = JSON.parse(lsUsers);
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
};
</script>
<style lang=""></style>

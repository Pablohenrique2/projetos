<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/livros">livros</b-nav-item>
          <b-nav-item to="/admin">admin</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item v-if="!user" to="/login">login</b-dropdown-item>
            <b-dropdown-item v-if="!user" to="/register"
              >register</b-dropdown-item
            >
            <b-dropdown-item v-if="user" to="/perfil">Perfil</b-dropdown-item>
            <b-dropdown-item v-if="user" @click.prevent="logout"
              >Sair</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nav>
      <router-link>Home</router-link> |
      <router-link>About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('activeUser');
      this.$router.push('/login');
      window.location.reload();
    },
  },
};
</script>

<style></style>

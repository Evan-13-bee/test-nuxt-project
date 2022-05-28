<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link active-class="active" exact class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" exact class="nav-link" to="/users">
            Users
          </nuxt-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link active-class="active" exact class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>
        <li class="nav-item" v-else  @click.prevent="logout">
          <nuxt-link active-class="active" exact class="nav-link" to="/#">
            Logout
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    // hasToken() {
    //   return this.$store.getters
    // },
    ...mapGetters({'hasToken': 'token/hasToken'})
  },
  methods: {
    logout() {
      this.$store.dispatch('token/logout')
    }
  }
};
</script>
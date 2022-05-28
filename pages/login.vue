<template>
  <section>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <input v-model="password" type="text" class="form-control" />
      </div>
      <p class="footer">
        <nuxt-link to="/"> To home page </nuxt-link>

        <button class="btn btn-primary" type="submit">Login</button>
      </p>
    </form>
    <div v-show="error" class="alert alert-danger error" role="alert">
      Password is not "admin"
    </div>
  </section>
</template>

<script>
export default {
  layout: "empty",
  data: () => ({
    password: "",
    error: false,
  }),
  methods: {
    onSubmit() {
      if (this.password === "admin") {
        this.$store.dispatch("token/login", { password: this.password });
        this.$router.push("/");
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    },
  },
};
</script>
<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.error {
  position: fixed;
  top: 15px;
  right: 15px;
}
</style>
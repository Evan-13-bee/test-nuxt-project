<template>
  <!-- <div>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="" @click.prevent="openUser(user.id)">{{ user.name }} </a>
      </li>
    </ul>
  </div> -->
  <table class="table mt-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user of users" :key="user.id" @click.prevent="openUser(user.id)" class="pointer">
        <th scope="row">{{user.id}}</th>
        <td>{{user.name}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  middleware: ["auth"],
  async fetch({ store }) {
    if (!store.getters["users/users"].length) {
      await store.dispatch("users/loadUsers");
    }
  },

  data: () => ({}),
  computed: {
    ...mapGetters({ users: "users/users" }),
  },

  methods: {
    openUser(user) {
      this.$router.push(`/users/${user}`);
    },
  },
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
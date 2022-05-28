<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">User:</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <editable-input :editMode="editMode" v-model="user.name" />
        </td>
        <td>
          <editable-input :editMode="editMode" v-model="user.username" />
        </td>
        <td>
          <editable-input :editMode="editMode" v-model="user.email" />
        </td>
        <td>
          <editable-input :editMode="editMode" v-model="user.phone" />
          </td>
      </tr>
      <tr>
        <td colspan="4" class="footer-edit">
          <button @click="setEditMode" class="btn btn-primary">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import EditableInput from "~/components/EditableInput.vue";
export default {
  components: { EditableInput },
  data: () => ({
    editMode: false,
  }),
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { user: data };
  },
  methods: {
    setEditMode() {
      this.editMode = !this.editMode;
    },
  },
};
</script>
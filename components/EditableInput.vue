<template>
  <input
    v-if="editMode"
    class="form-control"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
  <span v-else>{{ value }}</span>
</template>
<script>
export default {
  props: {
    editMode: { type: Boolean, default: false },
    value: { type: String, required: true },
  },
};
</script>
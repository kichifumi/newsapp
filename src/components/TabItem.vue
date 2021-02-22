<template>
  <button
    @click="$emit('input', id)"
    :class="[active, 'tab']"
    v-on:click="call(id)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    id: Number,
    label: String,
    value: Number,
  },
  computed: {
    active() {
      return this.value === this.id ? "active" : false;
    },
  },
  methods: {
    call(a) {
      console.log(a);
    },
  },
};
</script>

<style scoped>
.tab {
  line-height: 40px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  background: #eee;
  transition: 0.3s;
  border-radius: 10px 10px 0 0;
  border: none;
  outline: none;
}
.tab:hover {
  background: #56b4be;
  color: #fff;
}
.active {
  background: #56b4be;
  color: #fff;
  outline: none;
}
</style>
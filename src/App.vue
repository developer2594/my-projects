<template>
  <div id="app">
    <component :is="layout">
      <!-- <router-view /> -->
    </component>
  </div>
</template>

<script>
// import layouts
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  // registrated layouts
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/style.css";
</style>

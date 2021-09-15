<template>
  <div id="app">
    <Navigation />
    <SessionList />
  </div>
</template>

<script>
import SessionList from './components/SessionList.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    SessionList,
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.dispatch("fetchSessions")
    })
  },
}
</script>

<style lang="scss">
// Variable defaults
$testvar: #fb8b00;

// Bootstrap styles
//@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap/scss/functions.scss';
@import 'node_modules/bootstrap/scss/variables.scss';
@import "node_modules/bootstrap/scss/mixins";
@import "node_modules/bootstrap/scss/root";
@import "node_modules/bootstrap/scss/reboot";
@import "node_modules/bootstrap/scss/type";
@import "node_modules/bootstrap/scss/images";
@import "node_modules/bootstrap/scss/grid";
@import "node_modules/bootstrap/scss/forms";
@import "node_modules/bootstrap/scss/buttons";
@import "node_modules/bootstrap/scss/dropdown";
@import "node_modules/bootstrap/scss/nav";
@import "node_modules/bootstrap/scss/navbar";
@import "node_modules/bootstrap/scss/card";
@import "node_modules/bootstrap/scss/utilities";
@import "node_modules/bootstrap/scss/print";
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  outline: 2px dotted turquoise;
}
</style>

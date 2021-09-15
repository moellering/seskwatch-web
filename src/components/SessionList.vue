<template>
  <b-container class="session-list">
    <SessionItem v-for="item in sessions.data" :key="item.id" :item="item" />
  </b-container>
</template>

<script>
import Vue from 'vue'
import { mapState } from "vuex";
import SessionItem from './SessionItem.vue'
import { LayoutPlugin, CardPlugin, IconsPlugin, ButtonPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(CardPlugin)
Vue.use(IconsPlugin)
Vue.use(ButtonPlugin)

export default {
  name: "SessionList",
  computed: mapState(["sessions"]),
  components: {
    SessionItem,
  },
};
</script>

<style>
.session-list {
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>
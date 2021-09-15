<template>
  <b-row class="session-item">
    <b-col cols="1">
      <b-icon :icon="item.type.icon" font-scale="2"></b-icon>
    </b-col>
    <b-col>
      <div class="session-title">
        {{item.title}}
      </div>
      <div class="session-subtitle">
        {{item.type.name}} mit {{item.person_name}} über {{item.duration_minutes}} Minuten am {{item.start}}.
      </div>
    </b-col>
    <b-col cols="2">
      <b-button pill variant="outline-secondary">Eintragen</b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SessionItem",
  props: {
    item: Object,
  },
};
</script>

<style>
.session-item {
  margin: 1em 0;
}
</style>
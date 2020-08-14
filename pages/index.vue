<template>
  <div class="container">
    <room-list class="container__list" />
    <room-map class="container__map" />
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.container {
  display: grid;
  grid-template-columns: 33% 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "list map";

  @media #{$screen-sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media #{$screen-xs} {
    grid-template-areas: "map" "list";
    grid-template-columns: 1fr;
  }

  &__list {
    grid-area: list;
  }
  &__map {
    grid-area: map;
  }
}

</style>

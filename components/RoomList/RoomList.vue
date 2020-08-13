<template>
  <div class="list">
    <h1 class="list__title">
      Room List
    </h1>

    <div class="list__body custom-scrollbar">
      <client-only>
        <base-card v-for="r in paginatedRooms" :key="r.id" :title="r.name" />
        <infinite-loading @infinite="infiniteHandler" />
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    infiniteLoading: () => process.browser && import('vue-infinite-loading')
  },

  computed: {
    ...mapState(['page', 'rooms']),
    ...mapGetters(['paginatedRooms'])
  },

  methods: {
    infiniteHandler ($state) {
      $state.loaded()
      this.$store.commit('SET_PAGE', this.page + 1)
      if (this.paginatedRooms.length === this.rooms.length) { $state.complete() }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.list {
  background: #fff;
  padding: 5rem 5rem 0rem 5rem;
  width: 33vw;
  height: calc(100vh - 5rem);
  z-index: $layer-foreground;
  position: absolute;

  h1 {
    font-weight: 900;
  }

  &__body {
    height: calc(95vh - 10rem);
    overflow-y: auto;
    padding-right: 10px;
  }
}
</style>

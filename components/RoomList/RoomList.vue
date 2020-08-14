<template>
  <div class="list">
    <h1 class="list__title">
      Room List
    </h1>

    <div class="list__body custom-scrollbar">
      <client-only>
        <room-card v-for="r in paginatedRooms" :key="r.id" :room="r" />
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
  height: calc(100vh - 5rem);

  @media screen and (max-width: 1440px) {
    padding: 5rem 1rem 0rem 2rem;
  }

  @media #{$screen-xs} {
    padding: 1rem 1rem 0rem 2rem;
    height: calc(60vh - 5rem);
  }

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

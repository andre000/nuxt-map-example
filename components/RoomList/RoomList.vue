<template>
  <div class="list">
    <h1 class="list__title">
      Room List
    </h1>
    <nuxt-link class="list__link" to="/AveragePrice">
      <arrow-right-icon /> see average by neighbourhood
    </nuxt-link>

    <div class="list__body custom-scrollbar">
      <client-only>
        <room-card
          v-for="r in paginatedRooms"
          :key="r.id"
          :room="r"
          @click="$router.push(`room/${r.id}`)"
        />
        <infinite-loading @infinite="infiniteHandler" />
      </client-only>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    infiniteLoading: () => process.browser && import('vue-infinite-loading'),
    ArrowRightIcon
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

  &__title {
    margin-bottom: 5px;
  }

  &__link {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin-bottom: 1em;
    svg {
      margin-right: 5px;
    }
  }

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

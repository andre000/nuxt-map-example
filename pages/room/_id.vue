<template>
  <div v-if="selectedRoom">
    <h1>{{ selectedRoom.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    selectedRoom: null
  }),

  computed: {
    ...mapState(['rooms'])
  },

  created () {
    this.selectedRoom = this.rooms.find(r => Number(r.id) === Number(this.$route.params.id))
    if (!this.selectedRoom) { return this.$router.push('/') }
  }

}
</script>

<style>

</style>

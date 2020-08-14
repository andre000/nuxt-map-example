<template>
  <div class="map">
    <client-only>
      <l-map :zoom="13" :center.sync="center" :options="{zoomControl: false}">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-control-zoom position="bottomright" />
        <l-marker-cluster>
          <l-marker v-for="point in marks" :key="point.id" :lat-lng="point.latLng" @click="$emit('mark-selected', point.id)">
            <l-popup>
              <div class="map__popup">
                <img src="https://loremflickr.com/320/320">
                <span class="map__popup__title">{{ point.name }}</span>
                <span class="map__popup__price">{{ Number(point.price).toLocaleString('en', { style: 'currency', currency: 'USD'}) }} / day</span>
              </div>
            </l-popup>
          </l-marker>
        </l-marker-cluster>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    lMarkerCluster: () => process.browser && import('vue2-leaflet-markercluster')
  },

  data: () => ({
    center: [40.64749, -73.97237]
  }),

  computed: {
    marks () {
      return this.paginatedRooms?.map(r => ({
        id: r.id,
        latLng: [r.latitude, r.longitude],
        price: r.price,
        name: r.name
      }))
    },
    ...mapGetters(['paginatedRooms'])
  }
}
</script>

<style lang="scss">
@import "leaflet.markercluster/dist/MarkerCluster.css";
@import "leaflet.markercluster/dist/MarkerCluster.Default.css";
@import "@/assets/scss/variables.scss";

.map {
  height: 100vh;

  &__popup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 50px;
      height: auto;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    &__title {
      font-weight: bold;
    }
  }

  @media #{$screen-xs} {
    height: 40vh;
  }
}

</style>

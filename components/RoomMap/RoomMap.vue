<template>
  <div class="map">
    <client-only>
      <l-map :zoom="13" :center="[55.9464418,8.1277591]" :options="{zoomControl: false}">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-control-zoom position="bottomright" />
        <l-marker-cluster>
          <l-marker :lat-lng="[55.9453418,8.1277591]" />
          <l-marker :lat-lng="[55.9464418,8.1277591]" />
          <l-marker :lat-lng="[55.9475418,8.1277591]" />
          <l-marker :lat-lng="[55.9487418,8.1277591]" />
        </l-marker-cluster>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {
    lMarkerCluster: () => process.browser && import('vue2-leaflet-markercluster')
  }
}
</script>

<style lang="scss">
@import "leaflet.markercluster/dist/MarkerCluster.css";
@import "leaflet.markercluster/dist/MarkerCluster.Default.css";
@import "@/assets/scss/variables.scss";

.map {
  position: absolute;
  z-index: $layer-background;
  height: 100vh;
  width: 100vw;
}

</style>

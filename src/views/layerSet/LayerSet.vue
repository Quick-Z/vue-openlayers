<template>
  <div class="vm">
    <h2 class="h-title">图层组 Group</h2>
    <div id="map" class="map-x"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import { Tile, Group } from 'ol/layer'
import { OSM, TileJSON } from 'ol/source'

export default {
  name: 'Group',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new OSM()
          }),
          new Tile({
            source: new TileJSON({
              url: 'https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?securee&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q',
              crossOrigin: 'anonymous'
            })
          }),
          new Tile({
            source: new TileJSON({
              url: 'https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q',
              crossOrigin: 'anonymous'
            })
          })
        ],
        view: new View({
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          center: [37.40570, 8.81566],
          zoom: 4 // 地图缩放级别（打开页面时默认级别）
        })
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style>

</style>
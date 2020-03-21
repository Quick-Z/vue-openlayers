<template>
  <div class="vm">
    <h2 class="h-title">网格 Graticule</h2>
    <div id="map" class="map-x"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Stroke from 'ol/style/Stroke'
import Tile from 'ol/layer/Tile'
import Graticule from 'ol/layer/Graticule'
import BingMaps from 'ol/source/BingMaps'

export default {
  name: 'Graticule',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      console.log(new Map())
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new BingMaps({
              key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
              imagerySet: 'Road'
            })
          })
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [114.064839, 22.548857],
          zoom: 6
        })
      })

      let graticule = new Graticule({
        showLabels: true
      })

      graticule.setMap(this.map)
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style>

</style>
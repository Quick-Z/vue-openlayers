<template>
  <div class="vm">
    <h2 class="h-title">总览控件（鹰眼、小地图） OverviewMap</h2>
    <div id="map" class="map-x"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'
import * as control from 'ol/control'

export default {
  name: 'OverviewMap',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: 'map',
        controls: control.defaults().extend([
          new control.OverviewMap({
            className: 'ol-overviewmap ol-custom-overviewmap',
            layers: [
              new Tile({
                source: new BingMaps({
                  key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
                  imagerySet: 'Road'
                })
              })
            ],
            collapseLabel: '\u00BB',
            label: '\u00AB',
            collapsed: false
          })
        ]),
        layers: [
          new Tile({
            source: new BingMaps({
              key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
              imagerySet: 'Aerial'
            })
          })
        ],
        view: new View({
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857],
          zoom: 6 // 地图缩放级别（打开页面时默认级别）
        })
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
  .ol-custom-overviewmap,
  .ol-custom-overviewmap.ol-uncollapsible {
    bottom: auto;
    left: auto;
    right: 0;
    top: 0;
  }

  .ol-custom-overviewmap:not(.ol-collapsed) {
    border: 1px solid black;
  }

  .ol-custom-overviewmap .ol-overviewmap-map {
    border: none;
    width: 300px;
  }

  .ol-custom-overviewmap .ol-overviewmap-box {
    border: 2px solid red;
  }

  .ol-custom-overviewmap:not(.ol-collapsed) button {
    bottom: auto;
    left: auto;
    right: 1px;
    top: 1px;
  }

  .ol-rotate {
    top: 170px;
    right: 0;
  }
</style>
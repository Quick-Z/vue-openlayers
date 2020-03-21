<template>
  <div class="vm">
      <h2 class="h-title">聚合数据</h2>
      <div id="map" class="map-x"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { Style, Circle, Stroke, Fill, Text } from 'ol/style'
import layerVector from 'ol/layer/Vector'
import sourceVector from 'ol/source/Vector'
import Cluster from 'ol/source/Cluster'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'

export default {
  name: 'Polymerization',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {

      let count = 20000
      let e = 4500000
      let features = []
      let styleCache = {}

      for (let i = 0; i < count; ++i) {
        let coordinates = [2 * e * Math.random() - e, 2* e * Math.random() - e]
        features[i] = new Feature(new Point(coordinates))
      }

      let source = new sourceVector({
        features
      })

      let clusterSource = new Cluster({
        distance: parseInt(40, 10),
        source
      })

      let clusters = new layerVector({
        source: clusterSource,
        style: feature => {
          let size = feature.get('features').length
          let style = styleCache[size]
          
          if (!style) {
            style = new Style({
              image: new Circle({
                radius: 10,
                stroke: new Stroke({
                  color: '#fff'
                }),
                fill: new Fill({
                  color: '#3399cc'
                })
              }),
              text: new Text({
                text: size.toString(),
                fill: new Fill({
                  color: '#fff'
                })
              })
            })

            styleCache[size] = style
          }

          return style
        }
      })

      let raster = new Tile({
        source: new OSM()
      })

      this.map = new Map({
        target: "map",
        layers: [raster, clusters],
        view: new View({
          center: [0, 0],
          zoom: 2
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
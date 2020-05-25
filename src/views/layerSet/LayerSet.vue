<template>
  <div class="vm">
    <h2 class="h-title">图层组 Group</h2>
    <ul>
      <li><span>OSM 层</span>
        <fieldset id="layer0">
          <label class="checkbox" for="visible0">
            <input id="visible0" class="visible" type="checkbox" v-model="visible0" />可见
          </label>
          <label>透明度</label>
          <input class="opacity" type="range" min="0" max="1" step="0.01" v-model="visible0Opacity" />
        </fieldset>
      </li>
      <li><span>图层组</span>
        <fieldset id="layer1">
          <label class="checkbox" for="visible1">
            <input id="visible1" class="visible" type="checkbox" v-model="visible1" />可见
          </label>
          <label>透明度</label>
          <input class="opacity" type="range" min="0" max="1" step="0.01" v-model="visible1Opacity" />
        </fieldset>
        <ul>
          <li><span>食物危机主题图层</span>
            <fieldset id="layer10">
              <label class="checkbox" for="visible10">
                <input id="visible10" class="visible" type="checkbox" v-model="visible10" />可见
              </label>
              <label>透明度</label>
              <input class="opacity" type="range" min="0" max="1" step="0.01" v-model="visible10Opacity" />
            </fieldset>
          </li>
          <li><span>世界陆地边界图</span>
            <fieldset id="layer11">
              <label class="checkbox" for="visible11">
                <input id="visible11" class="visible" type="checkbox" v-model="visible11" />可见
              </label>
              <label>透明度</label>
              <input class="opacity" type="range" min="0" max="1" step="0.01" v-model="visible11Opacity" />
            </fieldset>
          </li>
        </ul>
      </li>
    </ul>
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
      map: null,
      visible0: true,
      visible0Opacity: 100,
      visible1: true,
      visible1Opacity: 100,
      visible10: true,
      visible10Opacity: 100,
      visible11: true,
      visible11Opacity: 100
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
          new Group({
            layers: [
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
            ]
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
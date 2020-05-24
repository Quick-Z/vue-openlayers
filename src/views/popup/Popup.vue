<template>
  <div class="vm">
    <h2 class="h-title">弹窗 popup</h2>
    <div id="map" class="map-x" ref="map"></div>

    <div class="hit-map" ref="HitMap">
    </div>
    <div ref="popup" class="popup">
      <span class="icon-close" @click="closePopup">✖</span>
      <div class="content">{{currentCoordinate}}</div>
    </div>
    <div class="explain">
      <p>
        overlay：叠加层，即叠加到地图上显示的元素，
                  关联了一个自定义的HTML元素，由一个单一的地图坐标点确定叠加位置。
                  与控件类似，但不同的是叠加元素不是在一个固定的屏幕位置上，
                  而是通过关联一个地图逻辑坐标点跟随地图移动，如标注点、popup等。
      </p>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ' // 引入XYZ地图格式
import Overlay from 'ol/Overlay'
import { toStringHDMS } from 'ol/coordinate'
import { toLonLat } from 'ol/proj'

export default {
  name: 'Popup',
  data() {
    return {
      map: null,
      overlay: null,
      currentCoordinate: ''
    }
  },
  methods: {
    initMap() {
      this.overlay = new Overlay({
        element: this.$refs.popup,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      })


      this.map = new Map({
        target: this.$refs.map,
        layers: [
          new Tile({
            name: 'defaultLayer',
            source: new XYZ({
              url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
            })
          })
        ],
        overlays: [this.overlay],
        view: new View({
          projection: 'EPSG:4326',
          center: [113.1206, 23.034996],
          zoom: 12
        })
      })

      this.mapClick()
    },

    mapClick() {
      this.map.on("singleclick", evt =>{
        const coordinate = evt.coordinate // 获取坐标
        const hdms = toStringHDMS(toLonLat(coordinate)) // 转换坐标格式
        this.currentCoordinate = hdms // 保存坐标点
        this.overlay.setPosition(coordinate)
      })
    },
    // 关闭弹窗
    closePopup () {
      this.overlay.setPosition(undefined)
      this.currentCoordinate = null
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/varibles.scss';
  .popup {
    width: 300px;
    height: 100px;
    background: #fff;
    position: absolute;
    top: -115px;
    left: -150px;
    box-sizing: border-box;
    padding: 10px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background: #fff;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }

    .icon-close {
      position: absolute;
      top: 0px;
      right: 8px;
    }

    .content {
      margin-top: 14px;
    }
  }
</style>
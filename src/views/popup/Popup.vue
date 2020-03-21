<template>
  <div class="vm">
    <h2 class="h-title">弹窗 popup</h2>
    <div id="map" class="map-x"></div>

    <div
      class="popup"
      ref="popup"
      v-show="currentCoordinate"
    >
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
import { OSM } from 'ol/source'
import { toStringHDMS } from 'ol/coordinate.js'
import { toLonLat } from 'ol/proj.js'
import Overlay from 'ol/Overlay.js'

export default {
  name: 'Popup',
  data () {
    return {
      map: null,
      currentCoordinate: null,
      overlay: null
    }
  },
  methods: {
    initMap () {
      // 弹窗
      this.overlay = new Overlay({
        element: this.$refs.popup, // 弹窗标签，在html里
        autoPan: true, // 如果弹窗在底图边缘时，底图会移动
        autoPanAnimation: { // 底图移动动画
          duration: 250
        }
      })

      // 实例化地图
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new OSM()
          })
        ],
        overlays: [this.overlay], // 把弹窗加入地图
        view: new View({
          center: [-27118403.38733027, 4852488.79124965], // 北京坐标
          zoom: 12 // 地图缩放级别（打开页面时默认级别）
        })
      })
      this.mapClick()
    },
    mapClick () {
      this.map.on('singleclick', evt => {
        const coordinate = evt.coordinate
        const hdms = toStringHDMS(toLonLat(coordinate))
        
        this.currentCoordinate = hdms // 保存坐标点

        setTimeout(() => {
          // 设置弹窗位置
          // 这里要设置定时器，不然弹窗首次出现，底图会跑偏
          this.overlay.setPosition(coordinate)
        }, 0)
        

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
    min-width: 280px;
    position: relative;
    background: #fff;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, calc(-100% - 12px));

    &::after {
      display: block;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      border: 12px solid transparent;
      border-top-color: #fff;
      bottom: -23px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .icon-close {
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 10px;
  }
</style>
<template>
  <nav class="g-nav">
    <router-link
      class="link"
      to="/"
      active-class="active"
      exact
    >
      第一个地图 map
    </router-link>
    <router-link
      v-for="(nav, index) in navList"
      :key="index"
      class="link"
      :to="nav.to"
      active-class="active"
      tag="div"
    >
      {{nav.title}}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'rootNav',
  data () {
    return {
      navList: [
        {
          title: '弹窗 popup',
          to: '/popup'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/varibles.scss';

  .g-nav {
    min-width: 200px;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-right: 20px;
    border-right: 1px solid #eee;
  }

  .link {
    padding: 10px;
    border-bottom: 1px dashed #ccc;
    text-decoration: none;
    color: $darkTextColor;
    cursor: pointer;
  }

  .active {
    background: $abgColor;
    color: #fff;
    border-bottom: none;
  }
</style>
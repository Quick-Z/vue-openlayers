<template>
  <div id="app">
    <root-nav></root-nav>
    <div class="root-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import RootNav from './components/rootNav/RootNav'
export default {
  name: 'App',
  components: {
    RootNav
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/mixins.scss';

  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
  }

  .root-view {
    flex: 1;
    height: 100vh;
    overflow: hidden;
  }

  // pub
  .h-title {
    @include headTitle();
  }
  .map-x {
    @include mapStyle();
  }
  .vm {
    height: 100%;
    overflow: auto;
  }
</style>

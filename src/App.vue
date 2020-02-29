<template>
  <div id="app">
    <div id="nav">
      <root-nav></root-nav>
    </div>
    <div class="root-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import RootNav from './components/RootNav'

export default {
  name: 'App',
  components: {
    RootNav
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/mixins.scss';

  #app {
    display: flex;
  }

  .root-view {
    flex: 1;
  }

  // pub
  .h-title {
    @include headTitle();
  }
  
  .map-x {
    @include mapXStyle();
  }
</style>

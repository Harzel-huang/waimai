<template>
  <div id="app">
    <Comfooter  v-show="$route.meta.showfooter"/>
    <router-view/>
  </div>
</template>

<script>
import Comfooter from "./components/Fotter";
export default {
  components: {
    Comfooter
  }
};
</script>

<style lang="scss">
</style>

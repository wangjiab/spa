<template>
  <div id="app">
    <div class="load">
      <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import MessageBox from 'vue-msgbox';
export default {
  name: 'app',
  components: {
    PulseLoader
  },
  data() {
    return {
      loading: true,
      color: 'green',
      size: "10px",
    }
  },
  created() {
   // MessageBox.alert('message');
  }
}
</script>

<style lang="scss">
@import './css/helpers/_functions.scss';
@import "./css/helpers/_normalize.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: rem(640);
  font-size: 14px;
  .load {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

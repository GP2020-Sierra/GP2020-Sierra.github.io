<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Sierra</h1>
        <p class="lead font-weight-normal">Azure Sphere for Citizen Science</p>
        <a class="btn btn-outline-secondary" href="https://github.com/GP2020-Sierra/" target="_blank">View Github</a>
      </div>
    </div>

    <div class="text-center text-dark">
      <div class="p-lg-3 mx-auto my-5">
        <h2 class="display-5">Sensors overview</h2>
      </div>
    </div>

    <b-row class="position-relative m-lg-3 no-gutters">
      <SensorSmall v-for="sensor in sensorsList" :key="sensor" v-bind:sensor="sensor" />
    </b-row>
  </div>
</template>

<script>
import SensorSmall from "~/components/SensorSmall.vue"
import Sensors from "~/src/sensors.js"

export default {
  components: {
    SensorSmall
  },
  head () {
    return {
      title: "Sierra"
    }
  },
  created () {
    this.sensorsList = Sensors.list
  }
}
</script>

<style>

</style>

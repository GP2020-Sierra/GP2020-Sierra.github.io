<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Sierra</h1>
        <p class="lead font-weight-normal">Azure Sphere for Citizen Science</p>
        <a class="btn btn-outline-secondary" href="https://github.com/GP2020-Sierra/" target="_blank">View Github</a>
      </div>
    </div>

    <div class="text-center text-dark">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h2 class="display-5">Sensors overview</h2>
      </div>
    </div>

    <template v-for="chunk in chunkedList">
      <div :key="chunk" class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <SensorSmall v-bind:sensor="chunk[0].data" v-bind:color-scheme="chunk[0].color" />
        <SensorSmall v-bind:sensor="chunk[1].data" v-bind:color-scheme="chunk[1].color" />
      </div>
    </template>
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
    this.chunkedList = []
    const colorSchemes = ["dark", "light", "light", "dark"]
    for (let i = 0; i < Sensors.list.length; i += 2) {
      this.chunkedList.push([
        { "data": Sensors.list[i], "color": colorSchemes[i % 4] },
        { "data": Sensors.list[i + 1], "color": colorSchemes[(i + 1) % 4] }
      ])
    }
  }
}
</script>

<style>

</style>

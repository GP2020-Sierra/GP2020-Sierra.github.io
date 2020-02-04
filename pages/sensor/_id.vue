<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Sensor {{ sensor.id }} </h1>
      </div>
    </div>

    <b-container>
      <p>Hello World</p>
      <p>My location: <i>{{ sensor.location }}</i></p>
    </b-container>
  </div>
</template>

<script>
import Sensors from "~/src/sensors.js"

export default {
  validate ({ params }) {
    return Sensors.ids.includes(params.id)
  },
  head () {
    return {
      title: "Sensor details"
    }
  },
  created () {
    this.sensor = Sensors.lookup[this.$route.params.id]
  }
}
</script>

<style>

</style>

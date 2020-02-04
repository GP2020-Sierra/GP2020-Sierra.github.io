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

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <SensorSmall id="1" color-scheme="dark" />
      <SensorSmall id="2" color-scheme="light" />
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <SensorSmall id="3" color-scheme="light" />
      <SensorSmall id="4" color-scheme="dark" />
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <SensorSmall id="5" color-scheme="dark" />
      <SensorSmall id="6" color-scheme="light" />
    </div>
  </div>
</template>

<script>
import SensorSmall from "~/components/SensorSmall.vue"

export default {
  components: {
    SensorSmall
  },
  head () {
    return {
      title: "Sierra"
    }
  }
}
</script>

<style>

</style>

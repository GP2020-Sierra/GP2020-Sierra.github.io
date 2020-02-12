<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">{{ location.name }} </h1>
      </div>
    </div>

    <b-container>
      <p>My ID #: {{ location.id }}</p>
      <TestChart v-bind:locationData="location.data" />
    </b-container>
  </div>
</template>

<script>
import Locations from "~/src/locations.js"
import TestChart from "~/components/TestChart"

export default {
  components: {
    TestChart
  },
  head () {
    return {
      title: "Location details"
    }
  },
  async asyncData (context) {
    const { locations, location } = await Locations.page(context, context.params.id)
    return { locations, location }
  }
}
</script>

<style>

</style>

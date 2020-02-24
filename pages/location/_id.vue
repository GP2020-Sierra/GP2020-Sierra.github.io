<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">{{ location.name }}</h1>
      </div>
    </div>

    <b-container>
      <p>My ID #: {{ location.id }}</p>
      <b-row class="text-center">
        <b-col>
          <b-form-group label="Graphs to display:">
            <b-form-checkbox-group id="checkbox-group-2" v-model="selected" :options="options" name="flavour-2" />
          </b-form-group>
        </b-col>
      </b-row>
      <TestApexChart v-if="selected" v-bind:locationData="locationData" v-bind:filterObject="filterObject" :key="chartKey" />
    </b-container>
  </div>
</template>

<script>

import Locations from "~/src/locations.js"
import TestApexChart from "~/components/TestApexChart.vue"

export default {
  components: {
    TestApexChart
  },
  data () {
    return {
      date: new Date(),
      yAxis: null,
      chartKey: 0,
      selected: ["temperature", "co2", "humidity", "pressure"],
      options: [
        { text: "Temperature", value: "temperature" },
        { text: "CO2", value: "co2" },
        { text: "Humidity", value: "humidity" },
        { text: "Pressure", value: "pressure" },
        { text: "Devices", value: "devices" }
      ]
    }
  },
  computed: {
    locationData () {
      return this.location.data
    },
    filterObject () {
      return {
        temperature: this.selected.includes("temperature"),
        co2: this.selected.includes("co2"),
        humidity: this.selected.includes("humidity"),
        pressure: this.selected.includes("pressure"),
        devices: this.selected.includes("devices")
      }
    }
  },
  async asyncData (context) {
    const { locations, location } = await Locations.page(context, context.params.id)
    return { locations, location }
  },
  methods: {
    forceRerender () {
      this.chartKey += 1
    }
  },
  head () {
    return {
      title: "Location details"
    }
  }
}

</script>

<style>
</style>

<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">{{ location.name }}</h1>
      </div>
    </div>

    <b-container>
      <p>My ID #: {{ location.id }}</p>
      <b-row>
        <b-col>
          <b-button v-on:click="forceRerender()">Hacky refresh</b-button>
        </b-col>
        <p>Y axis:</p>
        <b-col>
          <b-form-select v-model="yAxis">
            <b-form-select-option
              v-for="option in options"
              v-bind:key="option"
              :value="option"
            >
              {{ option }}
            </b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
      <TestChart v-bind:locationData="locationData" v-bind:yAxis="yAxis" :key="chartKey" />
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
  data () {
    return {
      date: new Date(),
      yAxis: null,
      chartKey: 0
    }
  },
  computed: {
    locationData () {
      return this.location.data
    },
    options () {
      const possibleYs = ["Temperature", "CO2", "Pressure", "Humidity"]
      return possibleYs
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

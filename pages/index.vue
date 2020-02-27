<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-2 mx-auto my-2">
        <h1 class="display-4 font-weight-normal">Sierra</h1>
        <p class="lead font-weight-normal">Azure Sphere for Citizen Science</p>
        <a class="btn btn-outline-secondary" href="https://github.com/GP2020-Sierra/" target="_blank">View Github</a>
      </div>
    </div>

    <div class="text-center text-dark">
      <div class="p-lg-2 mx-auto my-5">
        <h2 class="display-5">Sensors overview</h2>
        <p v-if="upToDateLocations==[]" class="display-6">We cannot recommend a place to study as our data isn't up to date :(</p>
        <p v-else class="display-6">Based on CO2 levels, the best place to study right now is {{ recommendation.name }}</p>
        <p v-if="recommendation.data[0].co2 < 1000" class="display-6">At just {{ recommendation.data[0].co2 }} ppm it has the smallest CO2 concentration.</p>
        <p v-else class="display-6">At {{ recommendation.data[0].co2 }} ppm it is still above the optimal CO2 range of 400 to 1000 ppm</p>
        </pclass="display-6">
      </div>
    </div>
    <div id="nav" class="size scroll">
      <!-- Twitter Embed Code -->
      <p align="right">
        <a
          class="twitter-timeline"
          data-width="300"
          data-height="450"
          data-theme="dark"
          href="https://twitter.com/CLSierra2020"
          data-aria-polite="assertive"
        >Tweets by CLSierra2020</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" /> </script>
      </p>
      <!-- / Twitter Embed Code -->
    </div>
    <div style="margin-right:320px">
      <b-row class="position-relative m-lg-3 no-gutters">
        <LocationSmall v-for="location in Object.values(locations)" :key="location.id" v-bind:location="location" />
      </b-row>
    </div>
  </div>
</template>

<script>
import LocationSmall from "~/components/LocationSmall.vue"
import Locations from "~/src/locations.js"
import moment from "moment"

export default {
  components: {
    LocationSmall
  },
  computed: {
    upToDateLocations () {
      const now = moment()
      const locations = Object.values(this.locations)
      return locations.filter(location =>
        moment(location.data[0].timestamp).isAfter(now.subtract(10, "minutes")) // check if time is within 10 mins
      )
    },
    recommendation () {
      const locations = this.upToDateLocations
      let minCo2Loc = null
      for (let i = 0; i < locations.length; i++) {
        const data = locations[i].data[0]
        if (minCo2Loc == null || data.co2 < minCo2Loc.data[0].co2) {
          minCo2Loc = locations[i]
        }
      }
      return minCo2Loc
    }
  },
  head () {
    return {
      title: "Sierra"
    }
  },
  async asyncData (context) {
    const { locations, summaryUpdater } = await Locations.summaryPage(context)
    return { locations, summaryUpdater }
  },
  created () {
    setInterval(this.summaryUpdater, Locations.updateInterval)
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("nav")
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop <= 250) {
          if (navClasses.contains("fixed") === true) {
            navClasses.toggle("fixed")
          }
          if (navClasses.contains("scroll") === false) {
            navClasses.toggle("scoll")
          }
          if (navClasses.contains("scroll2") === true) {
            navClasses.toggle("scroll2")
          }
        } else if (document.documentElement.scrollTop >= (document.body.scrollHeight - navbar.scrollHeight * 2.4)) {
          if (navClasses.contains("fixed") === true) {
            navClasses.toggle("fixed")
          }
          if (navClasses.contains("scroll") === true) {
            navClasses.toggle("scoll")
          }
          if (navClasses.contains("scroll2") === false) {
            navClasses.toggle("scroll2")
          }
        } else {
          if (navClasses.contains("fixed") === false) {
            navClasses.toggle("fixed")
          }
          if (navClasses.contains("scroll") === true) {
            navClasses.toggle("scoll")
          }
          if (navClasses.contains("scroll2") === true) {
            navClasses.toggle("scroll2")
          }
        }
      })
    })
  }
}

</script>

<style>
/* The sidebar menu */

.size{
  width: 25%;
}
.scroll {

  right: 2%;
  top: 600px;
  position: absolute; /* Fixed Sidebar (stay in place on scroll) */
}
.fixed {

  right: 2%;
  top: 345px;
  position: fixed;
}

.scroll2 {
  top: 1000px;
  position: absolute;
}

</style>

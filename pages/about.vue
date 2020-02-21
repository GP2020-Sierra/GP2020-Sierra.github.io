<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">More about our project</h1>
      </div>
    </div>

    <b-container>
      <h4>What we set out to achieve:</h4>
      <p>
        We deployed 6 sensors in common study spaces across Cambridge to try and gauge how well suited for work those enviroments are.
        To this we detected CO2 levels as well as tempreture, air pressure, humidity and how many people were studying there.
      </p>
    </b-container>

    <b-container>
      <h4>The science behind it all:</h4>
      <p>
        Many studies have shown that the level of carbon dioxide in the room is directly related to a students alertness and ability to concentrate.
        Even though CO2 is a harmless gas, it can contribute directly to increased tiredness and a loss of concentration.
      </p>
      <p>
        According to
        <a href="https://www.aivc.org/sites/default/files/155_0.pdf">this paper</a> on primary, middle and/or secondary school students in 16 studies from 1996 to 2015, reducing CO2 concentration from 2,000 ppm (parts per million) to 1,000 ppm
        would mean on average students perform psychological tests would 12% faster and make 3% fewer mistakes. More generally, the following trend was seen:
      </p>
      <b-container fluid class="p-4">
        <b-row>
          <b-col>
            <b-img fluid src="~/assets/images/performance.png" />
          </b-col>
          <b-col>
            <b-img fluid src="~/assets/images/accuracy.png" />
          </b-col>
        </b-row>
      </b-container>

      <!-- TODO: same for resource below:
      <p>https://www.researchgate.net/publication/221860768_Effect_of_classroom_air_quality_on_students'_concentration_Results_of_a_cluster-randomized_cross-over_experimental_study</p>-->
    </b-container>
  </div>
</template>

<script>
import Locations from "~/src/locations.js"

export default {
  head () {
    return {
      title: "About"
    }
  },
  async asyncData (context) {
    const { locations } = await Locations.page(context)
    return { locations }
  }
}
</script>

<style>
</style>

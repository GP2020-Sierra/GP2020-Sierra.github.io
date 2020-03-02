<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-2 mx-auto my-2">
        <h1 class="display-4 font-weight-normal">More about our project</h1>
      </div>
    </div>

    <b-container>
      <h4 class="text-center">The science behind it all</h4>
      <p>
        Many studies have shown that the level of carbon dioxide in the room is directly related to a students alertness and ability to concentrate.
        Even though CO2 is a harmless gas, it can contribute directly to increased tiredness and a loss of concentration.
      </p>
      <p>
        According to
        <a href="https://www.aivc.org/sites/default/files/155_0.pdf">this study</a> on students in 16 studies from 1996 to 2015, reducing CO2 concentration from 2,000 ppm (parts per million) to 1,000 ppm
        would mean that students complete psychological tests 12% faster and make 3% fewer mistakes on average.
      </p>
      <!-- <p>More specifically, the relationship between performance (speed) and CO2 can be seen below:</p>
      <b-img class="center graph-picture" fluid src="~/assets/images/performance.png" />
      <b-img class="center graph-picture" fluid src="~/assets/images/accuracy.png" /> -->
    </b-container>
    <b-container>
      <h4 class="text-center">What we set out to achieve</h4>
      <p>
        We deployed 6 sensors in common study spaces across Cambridge to try and gauge how well suited for work those enviroments are.
        To do this we detected CO2 levels as well as tempreture, air pressure, humidity and device count to estimate how many people are using that space.
      </p>
    </b-container>
    <b-container>
      <h4 class="text-center">What we found</h4>
      <p>
        This will be filled in once we have completed our survey and looked at our data.
      </p>
    </b-container>
    <b-container>
      <h4 class="text-center">Instructions for reproducing our project</h4>
      <p> To reproduce this project, follow the instructions in our <a href="https://github.com/GP2020-Sierra/README/blob/master/README.md">README repo</a></p>
    </b-container>

      <!-- TODO: same for resource below:
      <p>https://www.researchgate.net/publication/221860768_Effect_of_classroom_air_quality_on_students'_concentration_Results_of_a_cluster-randomized_cross-over_experimental_study</p>
      <p>https://ehp.niehs.nih.gov/doi/10.1289/ehp.1510037</p>-->
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

<style lang="scss">
.graph-picture {
  max-width:75%;
}
</style>

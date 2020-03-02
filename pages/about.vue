<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-2 mx-auto my-2">
        <h1 class="display-4 font-weight-normal">More about our project</h1>
      </div>
    </div>

    <b-container>
      <h4 class="text-center">Why we wanted to do this project</h4>
      <p>
        Many studies have shown that the level of carbon dioxide in the room is directly related to a students alertness and ability to concentrate.
        Even though CO2 is a harmless gas, it can contribute directly to increased tiredness and a loss of concentration.
      </p>
      <p>
        According to
        <a href="https://www.aivc.org/sites/default/files/155_0.pdf">this study</a> on primary, middle and secondary students from 1996 to 2015, reducing CO2 concentration from 2,000 ppm to 1,000 ppm
        would mean that students complete psychological tests 12% faster and make 3% fewer mistakes on average.
      </p>
      <!-- <p>More specifically, the relationship between performance (speed) and CO2 can be seen below:</p>
      <b-img class="center graph-picture" fluid src="~/assets/images/performance.png" />
      <b-img class="center graph-picture" fluid src="~/assets/images/accuracy.png" /> -->
    </b-container>
    <b-container>
      <h4 class="text-center">What we set out to achieve</h4>
      <p>
        As a citizen science project, our goal was to monitor the conditions of popular study locations in Cambridge to see how well suited they are for studying.
        This was in that hope that students could see the data at these locations and choose to work in places that they believe have the best conditions to be effective.
        To help them do this we wanted to display our readings on this website as well as have a twitter bot they can follow for updates.
      </p>
    </b-container>
    <b-container>
      <h4 class="text-center">What we did</h4>
      <p>
        To do this we deployed 5 azure IOT devices, each measuring the temperature, CO2, humidity, pressure and the number of devices connected to internet at these locations.
        Our boards were located in a supervision room at Churchill as well as various study/reading rooms at Churchill, Newnham and Emmanuel colleges.
        This allowed us to see the enviromental conditions throughout the day as well as estimate how busy these places were based on device count.
      </p>
      <p>
        We also released a google form to our cohort asking for their opinions on the ideal conditions of a study space and whether they would find this data useful.
        We recieved a total of 20 responses.
        60% of the students who responded said they found it "very hard" to study in poorly ventilated rooms, with 55% of students saying they would choose to study in a different location than usual based on the knowing the conditions were better.
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

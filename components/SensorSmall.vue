<template>
  <b-col class="col-12 col-lg-6 m-0 px-2 py-lg-2 py-0 text-center sensorSmall">
    <div class="my-3 py-3">
      <a v-bind:href="'/sensor/' + sensor.id"><h2 class="display-6">Sensor #{{ sensor.id }}</h2></a>
      <p class="lead">{{ sensor.location }}</p>
    </div>
    <div class="box-shadow mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
      (sensor data overview)
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    sensor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/mixins/_breakpoints.scss';

@mixin sensorDark {
  color: white;
  background-color: $dark;

  a, h2 {
    color: white;
    text-decoration-color: white;
  }

  .box-shadow {
    color: black;
    background-color: $light;
  }
}

@mixin sensorLight {
  color: black;
  background-color: $light;

  a, h2 {
    color: $dark;
    text-decoration-color: $dark;
  }

  .box-shadow {
    color: white;
    background-color: $dark;
  }
}

.sensorSmall {
  background-clip: content-box;
  border-radius: 2rem;
}

@include media-breakpoint-up(lg) {
  .sensorSmall:nth-of-type(4n+2), .sensorSmall:nth-of-type(4n+3) {
    @include sensorDark;
  }
  .sensorSmall:nth-of-type(4n+1), .sensorSmall:nth-of-type(4n+0) {
    @include sensorLight;
  }
}
@include media-breakpoint-down(lg) {
  .sensorSmall {
    @include sensorLight;
    border-radius: 0rem;
  }
}
</style>

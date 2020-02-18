<template>
  <b-col class="col-12 col-lg-6 m-0 p-2 text-center locationSmall">
    <div class="my-3 py-3">
      <a v-bind:href="'/location/' + location.id"><h2 class="display-6">{{ location.name }}</h2></a>
      <p class="lead">Location #{{ location.id }}</p>
    </div>
    <div class="locationSmallData box-shadow mx-auto">
      (location data overview)
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    location: {
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

@mixin locationDark {
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

@mixin locationLight {
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

.locationSmall {
  background-clip: content-box;
  border-radius: 2rem;

  .locationSmallData {
    width: 80%;
    height: 300px;
    border-radius: 21px 21px 0 0;
  }
}

@include media-breakpoint-up(lg) {
  .locationSmall:nth-of-type(4n+2), .locationSmall:nth-of-type(4n+3) {
    @include locationDark;
  }
  .locationSmall:nth-of-type(4n+1), .locationSmall:nth-of-type(4n+0) {
    @include locationLight;
  }
}
@include media-breakpoint-down(lg) {
  .locationSmall:nth-of-type(even) {
    @include locationDark;
  }
  .locationSmall:nth-of-type(odd) {
    @include locationLight;
  }
}
</style>

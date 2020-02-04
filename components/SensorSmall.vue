<template>
  <div v-bind:class="colorScheme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center sensorSmall">
    <div class="my-3 py-3">
      <a v-bind:href="'/sensor/' + id" v-bind:class="colorScheme == 'dark' ? 'text-white' : 'text-dark'"><h2 class="display-6">Sensor #{{ sensor.id }}</h2></a>
      <p class="lead">{{ sensor.location }}</p>
    </div>
    <div v-bind:class="colorScheme != 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" class="box-shadow mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
      (sensor data overview)
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sensor: {
      type: Object,
      required: true
    },
    colorScheme: {
      validator (value) {
        return ["dark", "light"].includes(value)
      },
      required: true
    }
  }
}
</script>

<style>

</style>

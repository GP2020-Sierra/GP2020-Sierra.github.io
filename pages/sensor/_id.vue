<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Sensor {{ id }} </h1>
      </div>
    </div>

    <div class="container">
      Hello World
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return ["1", "2", "3", "4", "5", "6"].includes(params.id)
  },
  head () {
    return {
      title: "Sensor {{ id }}"
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style>

</style>

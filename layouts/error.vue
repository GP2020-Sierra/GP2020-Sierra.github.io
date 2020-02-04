<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="p-lg-5 mx-auto my-5">
        <p class="lead font-weight-normal">{{ message }}</p>
        <a v-if="statusCode === 404" class="btn btn-outline-secondary" href="/">Back to the home page</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || "<%= messages.client_error %>"
    }
  },
  head () {
    return {
      title: this.message
    }
  }
}
</script>

<style>

</style>

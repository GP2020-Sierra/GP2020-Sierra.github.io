<template>
  <div>
    <nav class="site-header navbar navbar-expand-sm sticky-top">
      <!-- Full nav bar -->
      <div
        id="normal-navbar"
        class="container d-flex flex-column flex-md-row justify-content-between"
      >
        <a class="py-2 d-none d-md-inline-block" href="/">Sierra</a>
        <a
          v-for="sensor in sensorsList"
          :key="sensor.id"
          v-bind:href="'/sensor/' + sensor.id"
          class="py-2 d-none d-md-inline-block"
        >Sensor #{{ sensor.id }}</a>
      </div>

      <!-- Collapsed nav bar -->
      <button
        class="navbar-toggler btn btn-dark"
        type="button"
        data-toggle="collapse"
        data-target="navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <font-awesome-icon icon="bars" />
        </span>
      </button>
    </nav>
    <nuxt />
    <footer class="container py-5">
      <hr />
      <div class="row">
        <div class="col-md">
          <h5>About</h5>
          <p class="text-muted">Azure Sphere for Citizen Science</p>
          <p class="text-muted">University of Cambridge Computer Lab Group Project 2020</p>
          <p class="text-muted">Team Sierra</p>
          <small class="d-block mb-3 text-muted">&copy; 2020</small>
        </div>
        <div class="col-md">
          <h5>Team Members</h5>
          <ul class="list-unstyled text-small text-muted">
            <li>Ethan Jones</li>
            <li>Sam Kerr</li>
            <li>Gideon Mills</li>
            <li>Mina Sekularac</li>
            <li>Ben Shute</li>
            <li>Elanor Stark</li>
          </ul>
        </div>
        <div class="col-md">
          <h5>Links</h5>
          <ul class="list-unstyled text-small text-muted">
            <li>
              <a
                class="text-muted"
                href="https://github.com/GP2020-Sierra/"
                target="_blank"
              >Github Organisation</a>
            </li>
            <li>
              <a
                class="text-muted"
                href="https://github.com/GP2020-Sierra/GP2020-Sierra.github.io/tree/source"
                target="_blank"
              >Website source</a>
            </li>
            <li>
              <a class="text-muted" href="/LICENSE.txt">MIT License</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Sensors from "~/src/sensors.js"

export default {
  created () {
    this.sensorsList = Sensors.list
  }
}
</script>

<style>
.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, 0.85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color 0.15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Extra utilities
 */

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.flex-equal > * {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
  }
}

.overflow-hidden {
  overflow: hidden;
}
</style>

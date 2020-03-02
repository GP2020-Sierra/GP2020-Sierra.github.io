
<template>
  <div>
    <b-navbar toggleable="sm" type="dark" class="site-header sticky-top">
      <b-navbar-brand href="/">Sierra</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav>
          <b-nav-item href="/">Overview</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item-dropdown text="Locations">
            <b-dropdown-item
              v-for="location in locations"
              :key="location.id"
              v-bind:href="'/location/' + location.id"
            >
              {{ location.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" />
      </b-collapse>
    </b-navbar>

    <nuxt />

    <footer class="container py-5">
      <hr>
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
              <a ref="https://github.com/GP2020-Sierra/" class="text-muted" target="_blank">Github Organisation</a>
            </li>
            <li>
              <a class="text-muted" href="https://github.com/GP2020-Sierra/GP2020-Sierra.github.io/tree/source" target="_blank">Website source</a>
            </li>
            <li>
              <a class="text-muted" href="https://github.com/GP2020-Sierra/README/blob/master/README.md" target="_blank">Reproducing our project</a>
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
export default {
  computed: {
    locations () {
      return this.$store.state.locations
    }
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

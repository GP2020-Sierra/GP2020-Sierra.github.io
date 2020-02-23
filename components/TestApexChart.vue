<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <apexchart :options="chartOptions" :series="formattedData" height="250" type="line" />
    <apexchart :options="chartOptions2" :series="formattedData2" height="250" type="line" />
    <apexchart :options="chartOptions3" :series="formattedData3" height="250" type="line" />
    <apexchart :options="chartOptions4" :series="formattedData4" height="250" type="line" />
  </div>
</template>

<script>
export default {
  name: "Value",
  props: {
    locationData: {
      type: Array,
      required: true
    },
    filterObject: {
      type: Object,
      default: null
    }
  },
  data () {
    return {}
  },
  computed: {
    chartOptions () {
      return {
        title: {
          text: "Temperature",
          align: "left"
        },
        chart: {
          id: "line-1",
          group: "social",
          type: "line",
          animations: { enabled: true },
          zoom: { autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566 }
          }
        },
        annotations: { yaxis: this.yAnnotation() },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000)
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }

        }
      }
    },
    formattedData () {
      return [{ data: this.locationData.map(x => x.temperature) }]
    },
    chartOptions2 () {
      return {
        title: {
          text: "CO2",
          align: "left"
        },
        chart: {
          id: "line-2",
          group: "social",
          type: "line",
          animations: { enabled: true },
          zoom: { autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566 }
          }
        },
        annotations: { yaxis: [{
          y: 400,
          y2: 1000,
          borderColor: "#7FFF00",
          fillColor: "#CCFFCC",
          label: {
            text: "Optimal CO2 range"
          }
        }] },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000)
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        }
      }
    },

    formattedData2 () {
      return [{ data: this.locationData.map(x => x.co2) }]
    },
    chartOptions3 () {
      return {
        title: {
          text: "Pressure",
          align: "left"
        },
        chart: {
          id: "line-3",
          group: "social",
          type: "line",
          animations: { enabled: true },
          zoom: { autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566 }
          }

        },
        annotations: { yaxis: [{
          y: 1010,
          y2: 1020,
          borderColor: "#7FFF00",
          fillColor: "#CCFFCC",
          label: {
            text: "Optimal pressure range"
          }
        }] },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000)
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }

        }
      }
    },
    formattedData3 () {
      return [{ data: this.locationData.map(x => x.pressure) }]
    },
    chartOptions4 () {
      return {
        title: {
          text: "Humidity",
          align: "left"
        },
        chart: {
          id: "line-4",
          group: "social",
          type: "line",
          animations: { enabled: true },
          zoom: { autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566 }
          }

        },
        annotations: { yaxis: [
          {
            y: 0,
            y2: 30,
            borderColor: "#000",
            fillColor: "#b3ecff"
          },
          {
            y: 30,
            y2: 40,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal humidity range"
            }
          },
          {
            y: 40,
            y2: 50,
            borderColor: "#000",
            fillColor: "#ffd291"
          },
          {
            y: 50,
            y2: 65,
            borderColor: "#000",
            fillColor: "#ff9445"
          },
          {
            y: 65,
            y2: 100,
            borderColor: "#000",
            fillColor: "#ff3c13"
          }
        ] },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000)
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }

        }
      }
    },

    formattedData4 () {
      return [{ data: this.locationData.map(x => x.humidity) }]
    }
  },
  watch: {
    filterObject (newVal, oldVal) {
      this.render()
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    getY (x) {
      switch (this.filterObject.yAxis) {
        case "Humidity":
          return x.humidity
        case "CO2":
          return x.co2
        case "Pressure":
          return x.pressure
        default:
          return x.temperature
      }
    },
    yAnnotation () {
      switch (this.filterObject.yAxis) {
        case "Humidity":
          return [
            {
              y: 0,
              y2: 30,
              borderColor: "#000",
              fillColor: "#b3ecff"
            },
            {
              y: 30,
              y2: 40,
              borderColor: "#7FFF00",
              fillColor: "#CCFFCC",
              label: {
                text: "Optimal humidity range"
              }
            },
            {
              y: 40,
              y2: 50,
              borderColor: "#000",
              fillColor: "#ffd291"
            },
            {
              y: 50,
              y2: 65,
              borderColor: "#000",
              fillColor: "#ff9445"
            },
            {
              y: 65,
              y2: 100,
              borderColor: "#000",
              fillColor: "#ff3c13"
            }
          ]
        case "CO2":
          return [{
            y: 400,
            y2: 1000,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal CO2 range"
            }
          }]
        case "Pressure":
          return [{
            y: 1010,
            y2: 1020,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal pressure range"
            }
          }]
        default:
          return [{
            y: -5,
            y2: 17,
            borderColor: "#000",
            fillColor: "#b3d9ff"
          },
          {
            y: 17,
            y2: 20,
            borderColor: "#000",
            fillColor: "#b3ecff"
          },
          {
            y: 20,
            y2: 23,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal temperature range"
            }
          },
          {
            y: 23,
            y2: 25,
            borderColor: "#000",
            fillColor: "#ffd291"
          },
          {
            y: 25,
            y2: 27,
            borderColor: "#000",
            fillColor: "#ff9445"
          },
          {
            y: 27,
            y2: 40,
            borderColor: "#000",
            fillColor: "#ff3c13"
          }]
      }
    },
    render () {

    }
  }
}
</script>

<style>
</style>

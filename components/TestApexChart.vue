<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <apexchart v-if="filterObject.temperature" :options="temperature" :series="tempData" height="250" type="line" />
    <apexchart v-if="filterObject.co2" :options="co2" :series="co2Data" height="250" type="line" />
    <apexchart v-if="filterObject.humidity" :options="humidity" :series="humidityData" height="250" type="line" />
    <apexchart v-if="filterObject.pressure" :options="pressure" :series="pressureData" height="250" type="line" />
    <apexchart v-if="filterObject.devices" :options="devices" :series="devicesData" height="250" type="area" />
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
    temperature () {
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
          zoom: { autoScaleYaxis: false }
        },
        annotations: { yaxis: this.annotationY("Temperature") },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000),
          tooltip: { enabled: false }
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        },
        tooltip: {
          x: { format: "dd MMM HH:mm" },
          y: {
            formatter: val => val.toFixed(0) + "°C",
            title: { formatter: seriesName => "" }
          },
          marker: { show: false } }
      }
    },
    tempData () {
      return [{ data: this.locationData.map(x => x.temperature) }]
    },
    co2 () {
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
          zoom: { autoScaleYaxis: false }
        },
        annotations: { yaxis: this.annotationY("CO2") },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000),
          tooltip: { enabled: false }
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        },
        tooltip: {
          x: { format: "dd MMM HH:mm" },
          y: {
            formatter: val => val.toFixed(0) + "ppm",
            title: { formatter: seriesName => "" }
          },
          marker: { show: false } }
      }
    },

    co2Data () {
      return [{ data: this.locationData.map(x => x.co2) }]
    },
    pressure () {
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
          zoom: { autoScaleYaxis: false }
        },
        annotations: { yaxis: this.annotationY("Pressure") },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000),
          tooltip: { enabled: false }
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        },
        tooltip: {
          x: { format: "dd MMM HH:mm" },
          y: {
            formatter: val => val.toFixed(0) + "hPa",
            title: { formatter: seriesName => "" }
          },
          marker: { show: false } }
      }
    },
    pressureData () {
      return [{ data: this.locationData.map(x => x.pressure) }]
    },
    humidity () {
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
          zoom: { autoScaleYaxis: false }
        },
        annotations: { yaxis: this.annotationY("Humidity") },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000),
          tooltip: { enabled: false }
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        },
        tooltip: {
          x: { format: "dd MMM HH:mm" },
          y: {
            formatter: val => val.toFixed(0) + "%",
            title: { formatter: seriesName => "" }
          },
          marker: { show: false } }
      }
    },
    humidityData () {
      return [{ data: this.locationData.map(x => x.humidity) }]
    },
    devices () {
      return {
        title: {
          text: "Device Count (approx people count)",
          align: "left"
        },
        chart: {
          id: "line-4",
          group: "social",
          type: "area",
          animations: { enabled: true },
          zoom: { autoScaleYaxis: false }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 10
        },
        annotations: { yaxis: this.annotationY("Devices") },
        xaxis: {
          type: "datetime",
          categories: this.locationData.map(x => x.timestamp * 1000),
          tooltip: { enabled: false }
        },
        yaxis: {
          showAlways: true,
          labels: {
            formatter: val => val.toFixed(0),
            minWidth: 40
          }
        },
        fill: {
          colors: "#008FFB",
          opacity: 1.1,
          type: "solid"
        },
        tooltip: {
          x: { format: "dd MMM HH:mm" },
          y: {
            formatter: val => val.toFixed(0),
            title: { formatter: seriesName => "" }
          },
          marker: { show: false } }
      }
    },
    devicesData () {
      return [{ data: this.locationData.map(x => x.devices) }]
    }
  },
  watch: {
    filterObject (newVal, oldVal) {
      // on change?
    }
  },
  methods: {
    annotationY (str) {
      switch (str) {
        case "Devices":
          return []
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
            y: 0,
            y2: 400,
            borderColor: "#000",
            fillColor: "#b3ecff"
          },
          {
            y: 400,
            y2: 1000,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal CO2 range"
            }
          },
          {
            y: 1000,
            y2: 1500,
            borderColor: "#000",
            fillColor: "#ffd291"
          },
          {
            y: 1050,
            y2: 3000,
            borderColor: "#000",
            fillColor: "#ff9445"
          },
          {
            y: 3000,
            y2: 10000,
            borderColor: "#000",
            fillColor: "#ff3c13"
          }]
        case "Pressure":
          return [{
            y: 0,
            y2: 1000,
            borderColor: "#000",
            fillColor: "#b3ecff"
          },
          {
            y: 1000,
            y2: 1030,
            borderColor: "#7FFF00",
            fillColor: "#CCFFCC",
            label: {
              text: "Optimal pressure range"
            }
          },
          {
            y: 1030,
            y2: 1050,
            borderColor: "#000",
            fillColor: "#ff9445"
          },
          {
            y: 1050,
            y2: 10000,
            borderColor: "#000",
            fillColor: "#ff3c13"
          }
          ]
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
    }
  }
}
</script>

<style>
</style>

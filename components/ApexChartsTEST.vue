<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <h1 class="text-xl font-semibold">Basic Chart</h1>
    <apexchart :options="chartOptions" :series="formattedData" height="200" type="line" />
  </div>
</template>

<script>
// import moment from "moment"

export default {
  name: "LineExample",
  data () {
    return {}
  },
  computed: {
    chartOptions () {
      return {
        title: {
          text: "AAPL",
          align: "left"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2019-01-01",
            "2019-02-01",
            "2019-03-01",
            "2019-04-01",
            "2019-05-01",
            "2019-06-01",
            "2019-07-01"
          ]
        },
        yaxis: {
          tooltip: {
            enabled: false
          }
        },
        chart: {
          animations: {
            enabled: this.animations
          },
          zoom: {
            autoScaleYaxis: false // https://github.com/apexcharts/apexcharts.js/issues/566
          }
        }
      }
    },
    formattedData () {
      return [{ name: "WebsiteHits",
        data: [15, 20, 21, 25, 60, 120, 93] }]
    }
    /*
    data () {
      const thing = { yAxis: "Temperature" }
      const labelVal = this.filterObject.yAxis == null ? thing.yAxis : this.filterObject.yAxis
      return {
        labels: this.locationData.map(x => moment.unix(x.Timestamp)),
        datasets: [{
          label: labelVal,
          borderColor: "rgb(255, 0, 0)",
          fill: false,
          lineTension: 0.5,
          pointRadius: 0,
          // borderDash: [5, 29],
          data: this.locationData.map(x => this.getY(x))
          // cubicInterpolationMode: "monotone"
        }]
      }
    },

    options () {
      const timeFormat = "MM/DD/YYYY HH:mm"
      return {
        title: {
          text: "Test Graph"
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              parser: timeFormat,
              // round: 'day'
              tooltipFormat: "ll HH:mm"
            },
            scaleLabel: {
              display: true,
              labelString: "Date"
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "value"
            }
          }]
        }
      }
    } */
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
          return x.Humidity
        case "CO2":
          return x.CO2
        case "Pressure":
          return x.Pressure
        default:
          return x.Temperature
      }
    },
    render () {

    }
  }
}
</script>

<style>
</style>

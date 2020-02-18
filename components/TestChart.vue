<script>
import { Line } from "vue-chartjs"
import moment from "moment"

export default {
  extends: Line,
  props: {
    locationData: {
      type: Array,
      required: true
    },
    filterObject: {
      type: Object
      // default: null
    }
  },
  computed: {
    data () {
      const thing = { yAxis: "Temperature" }
      const labelVal = this.filterObject.yAxis == null ? thing.yAxis : this.filterObject.yAxis
      return {
        labels: this.locationData.map(x => moment.unix(x.timestamp)),
        datasets: [{
          label: labelVal,
          borderColor: "rgb(255, 0, 0)",
          fill: false,
          lineTension: 0,
          // borderDash: [5, 29],
          data: this.locationData.map(x => this.getY(x))
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
    }
  },
  watch: {
    filterObject (newVal, oldVal) {
      this.renderChart(this.data, this.options)
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
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
    }
  }
}
</script>

<style>
</style>

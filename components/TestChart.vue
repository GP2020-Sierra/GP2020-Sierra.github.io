<script>
import { Line } from "vue-chartjs"
import moment from "moment"

export default {
  extends: Line,
  props: {
    locationData: {
      type: Array,
      required: true
    }
  },
  mounted () {
    const data = {
      labels: this.locationData.map(x => moment.unix(x.Timestamp)),
      datasets: [{
        label: "Temperature",
        borderColor: "rgb(255, 0, 0)",
        fill: false,
        data: this.locationData.map(x => x.Temperature)
      }]
    }

    const timeFormat = "MM/DD/YYYY HH:mm"
    const options = {
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

    this.renderChart(data, options)
  }
}
</script>

<style>
</style>

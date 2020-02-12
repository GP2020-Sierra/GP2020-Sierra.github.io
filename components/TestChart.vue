<script>
import { Line } from "vue-chartjs"
import moment from "moment"

export default {
  extends: Line,
  props: {
    sensorData: {
      type: Array,
      required: true
    }
  },
  mounted () {
    const data = {
      labels: this.sensorData.map(x => moment.unix(x.Timestamp)),
      datasets: [{
        label: "My First dataset",
        borderColor: "rgb(255, 0, 0)",
        fill: false,
        data: this.sensorData.map(x => x.Temperature)
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

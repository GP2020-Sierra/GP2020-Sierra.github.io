import axios from "axios"
const api = "https://gp2020sierra.blob.core.windows.net/data/"

export default {
  async getLocations () {
    const { data } = await axios.get(api + "locations.json")
    const locations = {}

    data.forEach((location) => {
      location.loadData = async () => {
        if (location.data === undefined) {
          const { data } = await axios.get(api + "location/" + location.id + ".json")
          location.data = data
        }
        return location.data
      }
      locations[location.id] = location
    })

    return locations
  },
  async getLocation (id) {
    const locations = await this.getLocations()
    const location = locations[id]
    await location.loadData()
    return { locations, location }
  }
}

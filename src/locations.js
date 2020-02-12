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
  async page (context, locationID) {
    const locations = await this.getLocations()
    context.store.commit("setLocations", locations)

    let location = null
    if (locationID) {
      if (locationID in locations) {
        location = locations[locationID]
        await location.loadData()
      } else {
        context.error("Invalid location")
      }
    }
    context.store.commit("setLocation", location)

    return { locations, location }
  }
}

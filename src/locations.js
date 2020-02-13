import axios from "axios"
const api = "https://gp2020sierra.blob.core.windows.net/data/"

export default {
  async _locationsEndpoint () {
    const { data } = await axios.get(api + "locations.json")
    return data
  },
  async _locationEndpoint (id) {
    const { data } = await axios.get(api + "location/" + id + ".json")
    return data
  },
  async getLocations (context) {
    const locationList = await this._locationsEndpoint(context)
    const locations = {}

    locationList.forEach((location) => {
      location.loadData = async () => {
        if (location.data === undefined) {
          location.data = await this._locationEndpoint(location.id)
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

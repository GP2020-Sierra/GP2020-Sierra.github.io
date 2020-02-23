import axios from "axios"
const api = "https://gp2020-sierra.azurewebsites.net/api/"

export default {
  async _locationsEndpoint () {
    const { data } = await axios.get(api + "locations")
    return data
  },
  async _summaryEndpoint () {
    const { data } = await axios.get(api + "summary")
    return data
  },
  async _dataEndpoint (id) {
    const { data } = await axios.get(api + "data/" + id)
    data.forEach((x) => {
      x.timestamp = Date.parse(x.timestamp) / 1000
    })
    return data
  },
  async getLocations (func) {
    if (func === undefined) {
      func = this._locationsEndpoint
    }
    const locationList = await func()
    const locations = {}

    locationList.forEach((location) => {
      location.loadData = async () => {
        if (location.data === undefined) {
          location.data = await this._dataEndpoint(location.id)
        }
        return location.data
      }
      location.id = location.locationID
      location.timestamp = Date.parse(location.timestamp) / 1000
      locations[location.id] = location
    })

    return locations
  },
  async getSummary (context) {
    const summary = await this._summaryEndpoint(context)
    return summary
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
  },
  async summaryPage (context) {
    const locations = await this.getLocations(this._summaryEndpoint)
    context.store.commit("setLocations", locations)
    context.store.commit("setLocation", null)
    const summaryUpdater = async () => {
      const newLocations = await this.getLocations(this._summaryEndpoint)
      Object.values(locations).forEach((x) => {
        context.store.commit("setLocData", { locID: x.id, locData: newLocations[x.id].data })
      })
    }
    return { locations, summaryUpdater }
  },
  updateInterval: 30000
}

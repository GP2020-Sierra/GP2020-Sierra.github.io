export const state = () => ({
  locations: null,
  location: null
})

export const mutations = {
  setLocations (state, locations) {
    state.locations = locations
  },
  setLocation (state, location) {
    state.location = location
  },
  setLocData (state, { locID, locData }) {
    const loc = state.locations[locID]
    loc.data = locData
  }
}

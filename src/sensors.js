const sensorsList = [
  {
    id: "1",
    location: "Location A"
  },
  { id: "2",
    location: "Location B"
  },
  { id: "3",
    location: "Location C"
  },
  { id: "4",
    location: "Location D"
  },
  { id: "5",
    location: "Location E"
  },
  { id: "6",
    location: "Location F"
  }
]

export default {
  list: sensorsList,
  ids: sensorsList.map(x => x.id)
}

const BASE_URL = "http://localhost:3000/api/v1/beaches";

export const fetchBeaches = () => {
  return dispatch => {
    dispatch({ type: 'RETRIEVING_SAVED_BEACHES' });

    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(beachesJson => {
        const { beaches, locations, attractions, journal_entries } = normalizeBeaches(beachesJson.data);

        dispatch({ type: 'LOAD_BEACHES', beaches });
        dispatch({ type: 'LOAD_LOCATIONS', locations });
        dispatch({ type: 'LOAD_ATTRACTIONS', attractions });
        dispatch({ type: 'LOAD_JOURNAL_ENTRIES', journal_entries });
      })
  };
};

export const createBeach = beachData => {
  console.log("Beach data: ", beachData);
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(beachData)
  };

  return dispatch => {
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(beachJson => {
        console.log("Returned JSON: ", beachJson);
      })
  }
};

// Helper functions:

const normalizeBeaches = beachesData => {
  // Initialize an object:
  let normalized = {
    beaches: {},
    locations: {},
    attractions: {},
    journal_entries: {}
  };

  // Iterate over the beachesData array:
  for (const beachObj of beachesData) {
    const beach_id = parseInt(beachObj.id);

    const {
      name,
      description,
      items_to_bring,
      popular_activities,
      location,
      attractions,
      journal_entries
    } = beachObj.attributes;

    // Add the beachObj and its attributes (not including its associations):
    normalized.beaches[beach_id] = {
      id: beach_id,
      location_id: location.id,
      name, description, items_to_bring, popular_activities
    };

    // Add the beachObj's location:
    normalized.locations[location.id] = location;

    // Add the beachObj's attractions:
    for (const attraction of attractions) {
      normalized.attractions[attraction.id] = attraction;
    }

    // Add the beachObj's journal entries:
    for (const entry of journal_entries) {
      normalized.journal_entries[entry.id] = entry;
    }
  }

  return normalized;
};
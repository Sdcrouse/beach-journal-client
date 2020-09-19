export const fetchBeaches = () => {
  return dispatch => {
    dispatch({ type: 'RETRIEVING_SAVED_BEACHES' });

    fetch("http://localhost:3000/api/v1/beaches")
      .then(resp => resp.json())
      .then(beachJson => {
        const { beaches, locations, attractions, journal_entries } = normalizeBeaches(beachJson.data);

        dispatch({ type: 'LOAD_BEACHES', beaches });
        dispatch({ type: 'LOAD_LOCATIONS', locations });
        dispatch({ type: 'LOAD_ATTRACTIONS', attractions });
        dispatch({ type: 'LOAD_JOURNAL_ENTRIES', journal_entries });
      })
  };
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
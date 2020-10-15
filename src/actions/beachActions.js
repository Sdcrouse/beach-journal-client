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
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ beach: {...beachData} })
  };

  return dispatch => {
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(beachJson => {
        const { beach, location, attractions } = normalizeBeach(beachJson.data);

        dispatch({ type: 'ADD_BEACH', beach });
        dispatch({ type: 'ADD_LOCATION', location });
        dispatch({ type: 'ADD_ATTRACTIONS', attractions });
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
    const id = parseInt(beachObj.id);

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
    normalized.beaches[id] = {
      id,
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

const normalizeBeach = beachData => {
  const {
    name,
    location,
    description,
    items_to_bring,
    popular_activities,
    attractions,
    journal_entries
  } = beachData.attributes;

  const id = parseInt(beachData.id);
  const location_id = location.id;
  
  const normalized = {
    beach: {
      [id]: {
        id,
        location_id,
        name,
        description,
        items_to_bring,
        popular_activities
      }
    },
    location,
    attractions: {},
    journal_entries: {}
  };

  for (const attraction of attractions) {
    normalized.attractions[attraction.id] = attraction;
  }

  for (const entry of journal_entries) {
    normalized.journal_entries[entry.id] = entry;
  }

  return normalized;
};

/* Note to developers:

   As of this version of the Beach Journal, normalizeBeaches() takes an array of objects that looks like this:
   [
     {
      "id": "1",
      "type": "beach",
      "attributes": {
        "name": "Beach A",
        "description": "Lorem ipsum",
        "items_to_bring": "Dolor sit amet",
        "popular_activities": "Consectetur apidiscing amet",
        "location": {
          "id": 2,
          "city": "City B",
          "state": "State B",
          "country": "Country B"
        },
        "attractions": [
          {
            "id": 1,
            "beach_id": 1,
            "category": "Category A",
            "name": "Attraction A",
            "description": "Description A"
          },
          {
            "id": 2,
            "beach_id": 1,
            "category": "Category B",
            "name": "Attraction B",
            "description": "Description B"
          }
        ],
        "journal_entries": [
          {
            "id": 1,
            "beach_id": 1,
            "title": "Title 1",
            "topics: "A, B, C",
            "entry_text": "Entry text A"
          },
          {
            "id": 2,
            "beach_id": 1,
            "title": "Title 2",
            "topics: "D, E, F",
            "entry_text": "Entry text B"
          }          
        ]
      }
     },
     {
      "id": 2,
      "type": "beach",
      "attributes": {...}
     }
   ]

   and converts it into this nested object:
   {
     beaches: {
       1: {
         id: 1,
         location_id: 2,
         name: Beach A",
         description: "Lorem ipsum",
         items_to_bring: "Dolor sit amet",
         popular_activities: "Consectetur apidiscing amet"
       },
       2: {
         id: 2,...
       }
     },
     locations: {
       2: {
         "id": 2,
         "city": "City B",
         "state": "State B",
         "country": "Country B"
       },...
     },
     attractions: {
       1: {
         "id": 1,
         "beach_id": 1,
         "category": "Category A",
         "name": "Attraction A",
         "description": "Description A"
       },
       2: {
         "id": 2,
         "beach_id": 1,
         "category": "Category B",
         "name": "Attraction B",
         "description": "Description B"
       },...
     },
     journal_entries: {
       1: {
         "id": 1,
         "beach_id": 1,
         "title": "Title 1",
         "topics: "A, B, C",
         "entry_text": "Entry text A"
       },
       2: {
         "id": 2,
         "beach_id": 1,
         "title": "Title 2",
         "topics: "D, E, F",
         "entry_text": "Entry text B"
       },...
     }
   }

   A similar data structure conversion occurs in normalizeBeach, after a beach is created.
   The goal here is to make it easy to access and update data in the reducers.
*/

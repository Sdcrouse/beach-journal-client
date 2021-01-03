const BASE_URL = "http://localhost:3000/api/v1/beaches";

export const fetchBeaches = () => {
  return dispatch => {
    dispatch({ type: 'RETRIEVING_SAVED_BEACHES' });

    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(beachesJson => {
        const normalizedBeachData = normalizeBeaches(beachesJson.data);
        
        dispatch({ type: 'LOAD_BEACH_DATA', beachData: normalizedBeachData });
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
        const normalizedBeachData = normalizeBeach(beachJson.data);

        dispatch({ type: 'ADD_NEW_BEACH_DATA', newBeachData: normalizedBeachData });
      })
  }
};

export const deleteBeach = id => {
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ id })
  };

  return dispatch => {
    fetch(`${BASE_URL}/${id}`, configObj)
      .then(resp => resp.json())
      .then(idsJson => {
        dispatch({type: 'DELETE_BEACH', id});
        dispatch({type: 'DELETE_ATTRACTIONS', ids: idsJson.attractionIds});
        dispatch({type: 'DELETE_ENTRIES', ids: idsJson.journalEntryIds});
      })
  };
}

// Helper functions:

const normalizeBeaches = beachesData => {
  let normalized = {
    beaches: {},
    locations: {},
    attractions: {},
    journal_entries: {}
  };

  for (const beachObj of beachesData) {
    const { beach, location, attractions, journal_entries } = normalizeBeach(beachObj);

    normalized.beaches = {...normalized.beaches, ...beach};

    normalized.locations[location.id] = location;

    normalized.attractions = {...normalized.attractions, ...attractions};

    normalized.journal_entries = {...normalized.journal_entries, ...journal_entries};
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

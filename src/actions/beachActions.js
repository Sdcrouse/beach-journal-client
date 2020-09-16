import { normalize, schema } from 'normalizr';

export const fetchBeaches = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/beaches")
      .then(resp => resp.json())
      .then(beachJson => {
        const beachesAndAssociations = normalizeBeachData(beachJson.data).entities;

        dispatch({ type: 'LOAD_BEACHES', beaches: beachesAndAssociations.beaches });
      })
  };
};

// Helper methods:

const normalizeBeachData = beachData => {
  const data = beachData.map(beach => ({
    id: beach.id,
    type: beach.type,
    ...beach.attributes    
  }));

  const locationSchema = new schema.Entity('locations');
  const attractionSchema = new schema.Entity('attractions');
  const journalEntrySchema = new schema.Entity('journal_entries');
  
  const beachSchema = new schema.Entity('beaches', {
    location: locationSchema,
    attractions: [attractionSchema],
    journal_entries: [journalEntrySchema]
  });
  
  return normalize(data, [beachSchema]);
}
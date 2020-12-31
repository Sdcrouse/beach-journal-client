import { createSelector, createStructuredSelector } from 'reselect';

const beachesSelector = state => state.beachData.beaches;

export const structuredBeachesSelector = createStructuredSelector({
  beaches: beachesSelector
});

export const locationSelector = createSelector(
  state => state.locations,
  (_, locationId) => locationId,
  (locations, locationId) => locations[locationId]
)

export const attractionsByBeachSelector = () =>
  createSelector(
    state => state.attractions,
    (_, beachId) => beachId,
    (attractions, beachId) => Object.values(attractions).filter(attraction => attraction.beach_id === beachId)
  )

export const journalEntriesByBeachSelector = () => 
  createSelector(
    state => state.journalEntries,
    (_, beachId) => beachId,
    (journalEntries, beachId) => Object.values(journalEntries).filter(entry => entry.beach_id === beachId)
  );
import { createSelector } from 'reselect';

const filterCollectionByBeachId = (collection, beachId) => Object.values(collection).filter(
  collectionObj => collectionObj.beach_id === beachId
);

export const beachesSelector = createSelector(
  state => state.beachData.beaches,
  beaches => Object.values(beaches).sort((beachA, beachB) => beachB.id - beachA.id)
)

export const attractionsByBeachSelector = () =>
  createSelector(
    state => state.attractions,
    (_, beachId) => beachId,
    (attractions, beachId) => filterCollectionByBeachId(attractions, beachId)
  )

export const journalEntriesByBeachSelector = () => 
  createSelector(
    state => state.journalEntries,
    (_, beachId) => beachId,
    (journalEntries, beachId) => filterCollectionByBeachId(journalEntries, beachId)
  );
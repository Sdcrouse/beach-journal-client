import { createSelector } from 'reselect';

const filterCollectionByBeachId = (collection, beachId) => Object.values(collection).filter(
  collectionObj => collectionObj.beach_id === beachId
);

const reverseSortById = objCollection => objCollection.sort((objA, objB) => objB.id - objA.id);

export const beachesSelector = createSelector(
  state => state.beachData.beaches,
  beaches => reverseSortById( Object.values(beaches) )
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
    (journalEntries, beachId) => reverseSortById(
      filterCollectionByBeachId(journalEntries, beachId)
    )
  );
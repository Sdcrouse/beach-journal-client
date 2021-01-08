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
    (attractions, beachId) => {      
      // Stretch goal: Sort each category's attractions alphabetically. And is there a more efficient way to do all this?
      // Right now, organizing by category takes O(n) time for each beach.

      const attractionsByBeach = filterCollectionByBeachId(attractions, beachId);
      let organizedByCategory = {};

      attractionsByBeach.forEach(attraction => {
        if (organizedByCategory[attraction.category]) {
          organizedByCategory[attraction.category].push(attraction);
        } else {
          organizedByCategory[attraction.category] = [attraction];
        }
      });

      return organizedByCategory;
    }
  )

export const journalEntriesByBeachSelector = () => 
  createSelector(
    state => state.journalEntries,
    (_, beachId) => beachId,
    (journalEntries, beachId) => reverseSortById(
      filterCollectionByBeachId(journalEntries, beachId)
    )
  );
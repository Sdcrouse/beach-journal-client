import { createSelector, createStructuredSelector } from 'reselect';

const beachesSelector = state => state.beachData.beaches;
const locationsSelector = state => state.locations;
const attractionsSelector = state => state.attractions;

export const structuredBeachesSelector = createStructuredSelector({
  beaches: beachesSelector,
  locations: locationsSelector,
  attractions: attractionsSelector
});

export const journalEntriesByBeachSelector = () => 
  createSelector(
    state => state.journalEntries,
    (_, beachId) => beachId,
    (journalEntries, beachId) => Object.values(journalEntries).filter(entry => entry.beach_id === beachId)
  );
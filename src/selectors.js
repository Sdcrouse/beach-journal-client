import { createStructuredSelector } from 'reselect';

const beachesSelector = state => state.beachData.beaches;
const locationsSelector = state => state.locations;
const attractionsSelector = state => state.attractions;

export const structuredBeachesSelector = createStructuredSelector({
  beaches: beachesSelector,
  locations: locationsSelector,
  attractions: attractionsSelector
});
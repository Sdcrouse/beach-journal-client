import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import beachesReducer from './reducers/beachesReducer';
import locationsReducer from './reducers/locationsReducer';
import attractionsReducer from './reducers/attractionsReducer';
import journalEntriesReducer from './reducers/journalEntriesReducer';

const reducer = combineReducers({
  beachData: beachesReducer,
  locations: locationsReducer,
  attractions: attractionsReducer,
  journalEntries: journalEntriesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
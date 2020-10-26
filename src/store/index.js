import { rootReducer } from '../reducers';
import { createStore } from 'redux';

const intialState = {
  tasks: []
}

export const store = createStore(rootReducer, intialState);


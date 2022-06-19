import { FilterStateData } from '../interfaces';
import {
  ADD_FILTER, 
  RESET_FILTER,
} from './actionTypes';

const initialState: FilterStateData = {
  Zerspanung: null,
  Ziehen: null,
  Kettenherstellung: null,
  Dehngrenze: null,
  Zähigkeit: null,
};

export const reducer = (
  state = initialState, 
  action: { type: any; payload: {[key: string]: string};}
  ) => {
  switch (action.type) {
    case ADD_FILTER:

    console.log('state', {...state, ...action.payload});
    
      return {...state, ...action.payload};

    case RESET_FILTER:
      console.log('state', initialState);
      return initialState;

    default:
      return state
  }
};

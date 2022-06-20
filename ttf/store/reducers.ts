import { FilterStateData } from '../interfaces';
import {
  ADD_FILTER, 
  RESET_FORMGEBUNG_FILTER,
  RESET_EIGENSCHAFT_FILTER,
} from './actionTypes';

const initialState: FilterStateData = {
  Zerspanung: null,
  Kaltumformen: null,
  Ziehen: null,
  Schmieden: null,
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
      return {...state, ...action.payload};

    case RESET_FORMGEBUNG_FILTER:
      return {...state, 
        Zerspanung: null,
        Kaltumformen: null,
        Ziehen: null,
        Schmieden: null,
        Kettenherstellung: null};

    case RESET_EIGENSCHAFT_FILTER:
      return {...state, 
        Dehngrenze: null,
        Zähigkeit: null};

    default:
      return state
  }
};

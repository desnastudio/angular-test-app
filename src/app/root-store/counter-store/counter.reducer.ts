import {Actions, ActionTypes} from './counter.actions';
import {initialState, State} from './counter.state';

export function counterReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.CHANGE:
      return {
        ...state
      };
    case ActionTypes.INCREASE:
      return {
        ...state,
        counterFirst: state.counterFirst + 1
      };
    case ActionTypes.DECREASE:
      return {
        ...state,
        counterSecond: state.counterSecond - 1
      };
    default: {
      return state;
    }
  }
}

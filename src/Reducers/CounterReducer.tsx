// Initial State of Counter Reducer
export const initState = {
  count: 0,
  text: '',
};

// *** Action Types defined in enum
export enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// Reducer Action Schema
export type ReducerActionType = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// Main Reducer Function
export const CounterReducer = (
  state: typeof initState,
  action: ReducerActionType
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count === 0 ? 0 : state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' };
    default:
      throw new Error();
  }
};

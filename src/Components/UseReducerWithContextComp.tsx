import { useContext, createContext, useReducer, ChangeEvent } from 'react';

import {
  CounterReducer,
  initState,
  ReducerActionType,
  REDUCER_ACTION_TYPE,
} from '../Reducers/CounterReducer';

// Schema of context
interface CounterContextType {
  count: typeof initState;
  dispatch: React.Dispatch<ReducerActionType>;
  increment: () => void;
  decrement: () => void;
  // OnChange Type
  handleText: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Schema of children - props of context compoment
interface ContextChildrenType {
  children: React.ReactNode;
}

// Create Context
const CounterContext = createContext<CounterContextType | null>(null);

// Context Provder Component or Wrapper
function UseReducerWithContextComp({ children }: ContextChildrenType) {
  //   const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(CounterReducer, initState);

  // Handler Functions
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  // OnChange Event
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  const ctx = {
    count: state,
    dispatch,
    increment,
    decrement,
    handleText,
  };

  return (
    <CounterContext.Provider value={ctx}>{children}</CounterContext.Provider>
  );
}

export const useGlobalCounterContext = () => useContext(CounterContext);

export default UseReducerWithContextComp;

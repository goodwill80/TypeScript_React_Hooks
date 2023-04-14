import React from 'react';

import UseStateComponent from './Components/UseStateComponent';
import UseEffectComponent from './Components/UseEffectComponent';
import { useGlobalUserContext } from './Components/UseContextComponent';
import { useGlobalCounterContext } from './Components/UseReducerWithContextComp';

import './App.css';

function App() {
  const contextFromUser = useGlobalUserContext();
  const contextFromCounter = useGlobalCounterContext();

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-3xl font-bold">Reducer with Context</h1>
        <h1 className="text-4xl font-bold bg-black p-4 text-white">
          {contextFromCounter?.count}
        </h1>
        <h1 className="h-[20px]">{contextFromCounter?.text}</h1>
        <input
          className="border border-gray-200 p-2 rounded-lg"
          onChange={contextFromCounter?.handleText}
          type="text"
          placeholder="Enter text..."
        />
        <div className="flex p-2 space-x-2">
          <button
            onClick={() => contextFromCounter?.decrement()}
            className="btn btn-sm bg-blue-500 w-[80px] rounded-md text-white"
          >
            - Minus
          </button>
          <button
            onClick={() => contextFromCounter?.increment()}
            className="btn btn-sm bg-blue-500 w-[80px] rounded-md text-white"
          >
            + Add
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mb-3 font-bold">UseContext</h1>
        <h3>Firstname: {contextFromUser!.user?.first}</h3>
        <h3>Lastname: {contextFromUser!.user.last}</h3>
        <button
          className="btn bg-teal-700 text-white p-2 rounded-lg"
          onClick={() =>
            contextFromUser?.setUser({ first: 'Oliver', last: 'Ming' })
          }
        >
          Set User
        </button>
      </div>

      <div>
        <h1 className="text-2xl mb-3 font-bold">UseEffect</h1>
        <UseEffectComponent />
      </div>
      <div>
        <h1 className="text-2xl mb-3 font-bold">UseState</h1>
        <UseStateComponent />
      </div>
    </div>
  );
}

export default App;

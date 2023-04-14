import { useState } from 'react';

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 pb-2">
        <button
          className="btn bg-slate-300 p-2 rounded-lg mr-2"
          onClick={() => setArr([...arr, arr.length + 1])}
        >
          Add to array
        </button>
        <p>{JSON.stringify(arr)}</p>
      </div>
      <div className="flex justify-center items-center space-x-4 pb-2">
        <button
          className="btn bg-slate-300 p-2 rounded-lg mr-2"
          onClick={() => setName('jon')}
        >
          Set Name
        </button>
        <p>{JSON.stringify(name)}</p>
      </div>
    </div>
  );
}

export default UseStateComponent;

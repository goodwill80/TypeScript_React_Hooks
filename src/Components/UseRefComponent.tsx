import { useRef } from 'react';

function UseRefComponent() {
  // Type
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <input
        ref={inputRef}
        className="p-2 border border-gray-200 rounded"
        type="text"
        placeholder="useRef component"
      />
    </div>
  );
}

export default UseRefComponent;

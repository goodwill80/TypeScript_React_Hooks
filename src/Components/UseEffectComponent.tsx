import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{value}</div>;
}

export default UseEffectComponent;

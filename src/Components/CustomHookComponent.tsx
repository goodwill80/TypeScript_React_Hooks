import { useState, useEffect } from 'react';

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

// CUSTOM HOOK FUNCTIONinterface RootObject
// Note we also converted the Beverage type to generic <T>
function useFetchData<T>(url: string): {
  data: T | null;
  done: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: T) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

// We passed the <T> generic into the function as <Beverage[]>
function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json');
  return <div>{done && <img src={data![0].logo} alt="Beverage Logo" />}</div>;
}

export default CustomHookComponent;

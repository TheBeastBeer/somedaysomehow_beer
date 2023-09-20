import {Context, createContext, useContext, useMemo, useState} from 'react';

const QuantityContext = createContext(1);

export function useQuantity() {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }

  // @ts-ignore
  const [count, setCount] = context;

  const increment = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount: number) => {
      if (prevCount <= 1) {
        return 1;
      }

      return prevCount - 1;
    });
  };

  return {
    count,
    setCount,
    increment,
    decrement,
  }
}

export function QuantityProvider(props: any) {
  const [count, setCount] = useState(1);
  const value = useMemo(() => [count, setCount], [count]);

  return <QuantityContext.Provider value={value} {...props} />
}

export function QuantityInput() {
  
  const {count, increment, decrement} = useQuantity();

  return (
    <div className="flex justify-center">
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center border border-gray-200 rounded">
        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 bg-neutral-50 transition hover:opacity-75"
          onClick={decrement}
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value={count}
          className="text-black h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 bg-neutral-50 transition hover:opacity-75"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

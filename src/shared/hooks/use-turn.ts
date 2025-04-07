import { useState } from 'react';

export const useTurn = (initial: boolean) => {
  const [value, setValue] = useState(initial);

  const on = () => {
    setValue(true);
  };

  const off = () => {
    setValue(false);
  };

  return {
    value,
    on,
    off
  };
};

import { useRef } from 'react';

const usePrevious = <T>(value: T) => {
  const ref = useRef<{ value: T; prev: T | undefined }>({
    value,
    prev: undefined,
  });

  const current = ref.current.value;
  if (value !== current) {
    ref.current = {
      value,
      prev: current,
    };
  }

  return ref.current.prev;
};

export default usePrevious;

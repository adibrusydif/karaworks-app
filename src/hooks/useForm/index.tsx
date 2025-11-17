import { useState } from 'react';

export function useForm<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const setMergedState = (newState: Partial<T>) =>
    setState((prevState) => ({ ...prevState, ...newState }));
  return [state, setMergedState] as const;
}

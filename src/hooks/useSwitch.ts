import { useCallback, useState } from 'react';

type value = boolean;
type turnOn = () => void;
type turnOff = () => void;
type toggle = () => void;

const useSwitch = (initialValue = false): [value, turnOn, turnOff, toggle] => {
  const [state, setState] = useState(initialValue);

  const turnOn = useCallback(() => {
    setState(true);
  }, [setState]);

  const turnOff = useCallback(() => {
    setState(false);
  }, [setState]);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, [setState]);

  return [state, turnOn, turnOff, toggle];
};

export default useSwitch;

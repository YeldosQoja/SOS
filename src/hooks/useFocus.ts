import {Dispatch, SetStateAction, useState} from 'react';

export const useFocus = <T extends Object>(
  initialValue: keyof T | null = null,
): [keyof T | null, Dispatch<SetStateAction<keyof T | null>>] => {
  const [focusValue, setFocusValue] = useState<keyof T | null>(initialValue);
  return [focusValue, setFocusValue];
};

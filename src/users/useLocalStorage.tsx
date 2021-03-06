import { useState } from "react";


export const useLocalStorage = (key: string, initialValue: string) => {
  
  const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.warn("Setting localStorage went wrong: ", err);
        return initialValue;
      }
    });
  
    const setValue = (value: any) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.error(err);
      }
    };
  
    return [storedValue, setValue];
};
  
export default useLocalStorage;
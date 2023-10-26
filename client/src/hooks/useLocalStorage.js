import { useState, useEffect } from 'react';

const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    // Check if the item exists in local storage
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue !== null) {
      try {
        // Attempt to parse the JSON value
        return JSON.parse(jsonValue);
      } catch (error) {
        // Handle JSON parse error, e.g., invalid JSON
        console.error(`Error parsing JSON for key ${prefixedKey}: ${error}`);
      }
    }

    // If the value is not found or parsing fails, return the initialValue
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    // Stringify the value before storing it in local storage
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

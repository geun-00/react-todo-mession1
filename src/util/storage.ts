const storage = window.localStorage;

export const setItem = (key: string, value: unknown): void => {
  try {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    storage.setItem(key, stringValue);
  } catch (e) {
    console.error(e);
  }
};

export const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const value = storage.getItem(key);
    return value ? (JSON.parse(value) as T) : defaultValue;
  } catch (e) {
    console.error(e);
    return defaultValue;
  }
};

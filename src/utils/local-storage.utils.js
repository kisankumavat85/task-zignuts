export const setItem = async (key, value) => localStorage.setItem(key, value);

export const getItem = async (key) => localStorage.getItem(key);

export const clearStorage = () => localStorage.clear();

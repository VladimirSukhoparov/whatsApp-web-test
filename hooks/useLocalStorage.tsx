export const useLocalStorage = () => {
    const readLS = (key) => {
      try {
        return JSON.parse(localStorage.getItem(key)|| '');
      } catch (error) {
        if (typeof window !== 'undefined') {
        return localStorage.getItem(key);}
      }
    };
  
    const writeLS = (key, value) => {
      let storage = readLS(key) || '';
      storage = value;
      localStorage.setItem(key, JSON.stringify(storage));
    };
  
  
    const clearLS = () => {
      localStorage.clear();
    };
  
    return { readLS, writeLS, clearLS };
  };
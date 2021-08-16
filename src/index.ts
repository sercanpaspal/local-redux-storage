type StoreStateObject = {
  [key: string]: any;
};

let STORE_KEY: string = 'redux-store';

export const setStoreKey = (key: string): any => (STORE_KEY = key);

const storageItem = localStorage.getItem(STORE_KEY);

let store: StoreStateObject = storageItem ? JSON.parse(storageItem) : {};

const storage =
  (reducer: any, name: string = 'reducer'): any =>
  (state: any, action: any) => {
    const next = reducer(state || store[name], action);

    store = { ...store, [name]: next };

    localStorage.setItem(STORE_KEY, JSON.stringify(store));

    return next;
  };

export default storage;

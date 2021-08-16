type StoreStateObject = {
  [key: string]: any;
};

type Reducer = (state: any, action: any) => any;

let STORE_KEY: string = 'redux-storage';

const storageItem = localStorage.getItem(STORE_KEY);

let store: StoreStateObject = storageItem ? JSON.parse(storageItem) : {};

const storage =
  (reducer: Reducer, name: string = 'reducer'): any =>
  (state: any, action: any) => {
    const next = reducer(state || store[name], action);

    store = { ...store, [name]: next };

    localStorage.setItem(STORE_KEY, JSON.stringify(store));

    return next;
  };

export default storage;

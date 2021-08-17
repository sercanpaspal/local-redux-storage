# Local Redux Storage

[![NPM version](https://badge.fury.io/js/local-redux-storage.svg)](http://badge.fury.io/js/local-redux-storage)
[![Dependency Status](https://david-dm.org/sercanpaspal/local-redux-storage.svg)](https://david-dm.org/sercanpaspal/local-redux-storage)
[![devDependency Status](https://david-dm.org/sercanpaspal/local-redux-storage/dev-status.svg)](https://david-dm.org/sercanpaspal/local-redux-storage#info=devDependencies)

[![NPM](https://nodei.co/npm/local-redux-storage.png)](https://npmjs.org/package/local-redux-storage)

Simple, small and dependency free redux state to local storage on reduce layer.

## Installation

`npm i local-redux-storage`

## Usage

For all state.

```javascript
import { createStore, combineReducers } from 'redux';
import storage from 'local-redux-storage';

const rootReducer = combineReducers({ ...reducers })

const store = createStore(storage(rootReducer))

```

For one reducer state.

```javascript
import { createStore, combineReducers } from 'redux';
import storage from 'local-redux-storage';

const exampleReducer = (state = {}, action) => state

const reducer = storage(exampleReducer, 'exampleReducerKey')

const rootReducer = combineReducers({ 
    reducer,
    ...otherReducers 
})

const store = createStore(storage(rootReducer))

```

# Example

Example project in [example](./example) folder. Also live on [https://local-redux-storage-example.netlify.app/](https://local-redux-storage-example.netlify.app/).

# License

ISC
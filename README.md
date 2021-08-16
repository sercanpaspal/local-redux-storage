# Local Redux Storage

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

# License

ISC
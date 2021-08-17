# Local Redux Storage Example

For example, [theme.js](./src/reducers/theme.js) reducer wrapped storage function and set storage key as second argument.

```javascript
    export default storage(theme, "theme");
```

All theme state changes saved into local storage. And load as initial state if exists state in local storage.

Also you can wrap all `combineReducers` for save all app state.
import { configureStore } from "@reduxjs/toolkit";

import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  return next(action);
};

const store = configureStore({
  reducer: { heroes, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

// const enhacner =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       if (typeof action === "string") {
//         return oldDispatch({ type: action });
//       }
//       return oldDispatch(action);
//     };
//     return store;
//   };
// const store = createStore(
//   combineReducers({ heroes, filters }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
//

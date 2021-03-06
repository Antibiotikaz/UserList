import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import monitorReducerEnhancer from "../enhancers/monitorReducer";
import loggerMiddleware from "../middleware/logger";
import rootReducer from "./Reducers/index";


import { composeWithDevTools } from "redux-devtools-extension";


export default function configureStore(preloadedState?: {}) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

  // const composedEnhancers = compose(...enhancers);
  const composedEnhancers = composeWithDevTools(...enhancers as any);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);



  return store;
}















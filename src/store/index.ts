import { combineReducers, createStore } from "redux";

import { IDemoState } from "./demo/types";
import demoReducer from "./demo/reducer";

export interface IRootState {
  demo: IDemoState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer,
  })
);

export default store;

import { Constants } from "./constants";
import { DemoActions, IDemoState } from "./types";

const init: IDemoState = {
  list: [],
};

const demoReducer = (
  state: IDemoState = init,
  action: DemoActions
): IDemoState => {
  switch (action.type) {
    case Constants.ADD_ITEM:
      return { list: [...state.list, action.payload.item] };
    default:
      return state;
  }
};

export default demoReducer;

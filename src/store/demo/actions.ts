import { action } from "typesafe-actions";
import { Constants } from "./constants";

const addItemToList = (item: string) => {
  return action(Constants.ADD_ITEM, { item });
};
export default addItemToList;

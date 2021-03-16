import { Dispatch } from "redux";
import React, { FC, useState } from "react";
import { connect } from "react-redux";

import { IRootState } from "../store";
import { DemoActions } from "../store/demo/types";
import addItemToList from "../store/demo/actions";

import "./App.scss";

const mapStateToProps = ({ demo }: IRootState) => {
  const { list } = demo;
  return { list };
};

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
    addItem: (item: string) => dispatch(addItemToList(item)),
  };
};

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

const App: FC<ReduxType> = props => {
  const { list } = props;

  const [inputText, setCount] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };

  const onAddClick = () => {
    props.addItem(inputText);
    setCount("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="note"
          value={inputText}
          onChange={onInputChange}
        />
        <button onClick={onAddClick}>Add</button>
        <ul>
          {list.map(l => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);

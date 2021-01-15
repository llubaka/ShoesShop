import React from "react";
import { UseCustomReducer } from "./reducer";

const style = {
  border: "solid 1px",
  "border-radius": "10px",
  margin: "10px",
  padding: "10px",
  display: "inline-block",
  "font-size": "22px",
};

const UseReducer = () => {
  const { state, dispatch } = UseCustomReducer();
  console.log(state);
  return (
    <div style={style}>
      <span>
        {" "}
        The human is currenly working:{" "}
        <span style={{ color: "red" }}> {state.work.toString()} </span>
      </span>
      <br></br>
      <span>
        {" "}
        Actual value : <span style={{ color: "red" }}> {state.value} </span>
      </span>{" "}
      <br></br>
      <span>
        {Object.keys(state).includes("morph") && (
          <span>
            {" "}
            Morph value: <span style={{ color: "red" }}> {state.morph} </span>
          </span>
        )}
      </span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => dispatch({ type: "sleep" })}> Put to sleep</button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch({ type: "work" })}> Put to work</button>
      <br></br>
      <br></br>
      <button
        onClick={() =>
          dispatch({ type: "morph", morph: "buttong for morphing clicked" })
        }
      >
        {" "}
        Put to morph
      </button>
    </div>
  );
};

export default UseReducer;

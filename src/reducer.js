import { useReducer } from "react";

const recuderMethod = (state, action) => {
  switch (action.type) {
    case "work":
      delete state.morph;
      return { ...state, work: true, value: "Currently working." };

    case "sleep":
      return { ...state, work: false, value: "Currently sleeping." };
    case "morph":
      const { morph } = action;
      return {
        ...state,
        work: false,
        value: "Currently morphing.",
        morph,
      };
    default:
      return { ...state, work: false, value: "Default value" };
  }
};

let initState = {
  work: false,
  value: "initial value",
};

export const UseCustomReducer = () => {
  const [state, dispatch] = useReducer(recuderMethod, initState);
  return { state, dispatch };
};

export default recuderMethod;

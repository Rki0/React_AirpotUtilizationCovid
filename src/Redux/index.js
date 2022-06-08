import { combineReducers } from "redux";
import FlightData from "./FlightData";

const rootReducer = combineReducers({
  FlightData,
});

export default rootReducer;

///////////////////
// ver.2

// import { configureStore } from "@reduxjs/toolkit";
// import flightReducer from "./FlightSlice";

// export default configureStore({
//   reducer: {
//     flight: flightReducer,
//   },
// });

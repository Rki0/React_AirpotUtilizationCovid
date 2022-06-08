const initialState = {
  beforeFlight: [],
  afterFlight: [],
};

const GET_BEFORE = "GET_BEFORE";
const GET_AFTER = "GET_AFTER";

export const getBefore = (data, load = true) => ({
  type: GET_BEFORE,
  data: data,
  isLoading: load,
});

export const getAfter = (data, load = true) => ({
  type: GET_AFTER,
  data: data,
  isLoading: load,
});

export default function FlightData(state = initialState, action) {
  switch (action.type) {
    case GET_BEFORE:
      return {
        ...state,
        beforeFlight: action.data,
      };

    case GET_AFTER:
      return {
        ...state,
        afterFlight: action.data,
      };

    default:
      return state;
  }
}

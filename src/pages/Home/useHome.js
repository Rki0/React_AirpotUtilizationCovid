import { useDispatch } from "react-redux";
import { getBefore, getAfter } from "../../Redux/FlightData";
import { onRequestAfter, onRequestBefore } from "../../Common/fetchFlight";

export const useHome = () => {
  const dispatch = useDispatch();

  // 데이터 fetch와 에러 처리 기능
  // const fetchFlight = async () => {
  //   try {
  //     const responseBefore = await onRequestBefore();
  //     const responseAfter = await onRequestAfter();
  //     console.log("fetchFlight 중간 점검");

  //     if (responseBefore.status === 200 && responseAfter.status === 200) {
  //       const beforeData = responseBefore.data;
  //       const afterData = responseAfter.data;

  //       dispatch(getBefore(beforeData, false));
  //       dispatch(getAfter(afterData, false));
  //     } else {
  //       throw (responseBefore, responseAfter);
  //     }
  //   } catch (e) {
  //     console.log("fail to load data");
  //   }
  // };

  const fetchFlight = async () => {
    try {
      const response = await onRequestBefore();

      console.log("fetchFlight before 중간 점검");

      if (response.status === 200) {
        const beforeData = response.data;

        dispatch(getBefore(beforeData, false));
      } else {
        throw response;
      }
    } catch (e) {
      console.log("fail to load before data");
    }

    try {
      const response = await onRequestAfter();
      console.log("fetchFlight after 중간 점검");
      if (response.status === 200) {
        const afterData = response.data;

        dispatch(getAfter(afterData, false));
      } else {
        throw response;
      }
    } catch (e) {
      console.log("fail to load after data");
    }
  };

  return {
    fetchFlight,
  };
};

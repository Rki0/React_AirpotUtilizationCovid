import { useSelector } from "react-redux";

export const useStore = () => {
  // useHome에 있는fetchFlight에서 리덕스 스토어를 업데이트 했으므로, 스토어에 접근해서 값 사용
  const { beforeFlight, afterFlight } = useSelector((state) => ({
    beforeFlight: state.FlightData.beforeFlight,
    afterFlight: state.FlightData.afterFlight,
  }));

  // 데이터를 사용 목적에 맞게 가공
  // 객체의 value들이 전부 string 타입이므로 주의!
  const flightDataBefore = beforeFlight.data;
  console.log("Before Covid", flightDataBefore);

  const flightDataAfter = afterFlight.data;
  console.log("After Covid", flightDataAfter);

  // 파싱한 데이터를 저장하기 위해서 만든 빈 배열
  // 이 값들이 최종 가공된 데이터이다.
  let beforeDepNumber = [];
  let afterDepNumber = [];
  let beforeArrNumber = [];
  let afterArrNumber = [];

  for (let i = 0; i < flightDataBefore.length; i++) {
    // string으로 쓰여져 있는 데이터에서 , 문자를 지우고 number로 변환
    beforeDepNumber[i] = parseInt(
      flightDataBefore[i].depFlight.replace(/,/g, "")
    );
    afterDepNumber[i] = parseInt(
      flightDataAfter[i].depFlight.replace(/,/g, "")
    );
    beforeArrNumber[i] = parseInt(
      flightDataBefore[i].arrFlight.replace(/,/g, "")
    );
    afterArrNumber[i] = parseInt(
      flightDataAfter[i].arrFlight.replace(/,/g, "")
    );
  }

  return {
    flightDataBefore,
    beforeDepNumber,
    afterDepNumber,
    beforeArrNumber,
    afterArrNumber,
  };
};

// 이 파일은 page 기능만 하게 만들자.

import { useEffect } from "react";

import { useHome } from "./useHome";
import { useStore } from "./useStore";
import DataChart from "../../UI/DataChart";
import { useSelector } from "react-redux";

function DisplayFlight() {
  const { fetchFlight } = useHome();

  useEffect(() => {
    fetchFlight();
  });

  const {
    flightDataBefore,
    beforeDepNumber,
    afterDepNumber,
    beforeArrNumber,
    afterArrNumber,
  } = useStore();

  const { isLoading } = useSelector((state) => ({
    isLoading: state.FlightData.afterFlight.isLoading,
  }));

  return (
    <div>
      <div>
        {isLoading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            <h1>코로나 전・후 2년 공항별 국제선 비율</h1>
            <div>
              <DataChart
                flightDataBefore={flightDataBefore}
                beforeDepNumber={beforeDepNumber}
                afterDepNumber={afterDepNumber}
                beforeArrNumber={beforeArrNumber}
                afterArrNumber={afterArrNumber}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayFlight;

// 이 파일은 데이터 불러오는 부분을 fetchFlight로 옮기고 page 기능만 하게 만들어야할듯

import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DataChart from "./UI/DataChart";

function DisplayFlight({
  API_KEY,
  fromMonthAfter,
  toMonthAfter,
  fromMonthBefore,
  toMonthBefore,
}) {
  const url_after = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthAfter}&to_month=${toMonthAfter}&periodicity=0&domestic_foreign=I&type=json`;
  const url_before = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthBefore}&to_month=${toMonthBefore}&periodicity=0&domestic_foreign=I&type=json`;

  const [flightAfter, setFlightAfter] = useState({
    isLoading: true,
    data: [],
  });

  const [flightBefore, setFlightBefore] = useState({
    isLoading: true,
    data: [],
  });

  async function getFlight() {
    await axios.get(url_after).then((response) => {
      const itemListAfter = response.data.response.body.items;

      setFlightAfter({
        isLoading: false,
        data: itemListAfter,
      });
    });

    await axios.get(url_before).then((response) => {
      const itemListBefore = response.data.response.body.items;

      setFlightBefore({
        isLoading: false,
        data: itemListBefore,
      });
    });
  }

  useEffect(() => {
    getFlight();
  }, []);

  // 객체의 value들이 전부 string 타입으로 받아짐.
  const flightDataAfter = flightAfter.data;
  console.log("After Covid", flightDataAfter);

  const flightDataBefore = flightBefore.data;
  console.log("Before Covid", flightDataBefore);

  // const flightData = flightDataBefore.concat(flightDataAfter);
  // console.log("Before + After", flightData);

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

  const chartDepData = [];
  const chartArrData = [];

  for (let i = 0; i < flightDataBefore.length; i++) {
    chartDepData[i] = {
      labels: { display: false },
      datasets: [
        {
          id: flightDataAfter[i].airport,
          label: "코로나 전 / 후 국제선 출발 항공기 비율",
          data: [beforeDepNumber[i], afterDepNumber[i]],
          borderWidth: 2,
          hoverBorderWidth: 3,
          backgroundColor: ["#42a5f5", "#ef5350"],
          fill: true,
          borderRadius: 4,
          cutout: "50%",
        },
      ],
    };
  }

  for (let i = 0; i < flightDataBefore.length; i++) {
    chartArrData[i] = {
      labels: { display: false },
      // labels: ["코로나 전", "코로나 후"],
      datasets: [
        {
          id: flightDataAfter[i].airport,
          label: "코로나 전 / 후 국제선 도착 항공기 비율",
          data: [beforeArrNumber[i], afterArrNumber[i]],
          borderWidth: 2,
          hoverBorderWidth: 3,
          backgroundColor: ["#42a5f5", "#ef5350"],
          fill: true,
          borderRadius: 4,
          cutout: "50%",
        },
      ],
    };
  }

  console.log("차트 출발 데이터", chartDepData);
  console.log("차트 도착 데이터", chartArrData);

  /////////////////////

  const { isLoading } = flightBefore;

  return (
    <div>
      <div>
        {isLoading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            <HeadLine>
              <Title>코로나 전・후 2년 공항별 국제선 비율</Title>

              <ChartInfo>
                <div>
                  <InfoBefore></InfoBefore>
                  <span>코로나 전 (2018.Jen ~ 2019.Dec)</span>
                </div>
                <div>
                  <InfoAfter></InfoAfter>
                  <span>코로나 후 (2020.Jen ~ 2021.Dec)</span>
                </div>
              </ChartInfo>
            </HeadLine>
            <div>
              <DataChart
                flightDataAfter={flightDataAfter}
                chartDepData={chartDepData}
                chartArrData={chartArrData}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayFlight;

const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0px 0px 30px 30px;
  font-weight: 700;
`;

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoBefore = styled.div`
  display: inline-block;
  width: 35px;
  height: 13px;
  background-color: #42a5f5;
  margin-right: 8px;
`;

const InfoAfter = styled.div`
  display: inline-block;
  width: 35px;
  height: 13px;
  background-color: #ef5350;
  margin-right: 8px;
`;

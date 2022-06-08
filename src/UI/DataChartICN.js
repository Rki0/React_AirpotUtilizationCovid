// 이 파일은 공항 이름, 출발 데이터, 도착 데이터를 Doughnut Chart로 구현하는 부분

import styled from "styled-components";

// 도넛 차트 구현을 위해 import 해야할 것들. Chart.js 참고.
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement,
  Legend,
  Tooltip
);

// 여객기 코로나 전후 출발, 도착을 하나로 묶고, 수송기를 하나로 묶고.

function DataChartICN({ beforeY, afterY, beforeN, afterN }) {
  const beforeYdep = parseInt(beforeY.depFlight.replace(/,/g, ""));
  const beforeYarr = parseInt(beforeY.arrFlight.replace(/,/g, ""));

  const afterYdep = parseInt(afterY.depFlight.replace(/,/g, ""));
  const afterYarr = parseInt(afterY.arrFlight.replace(/,/g, ""));

  const beforeNdep = parseInt(beforeN.depFlight.replace(/,/g, ""));
  const beforeNarr = parseInt(beforeN.arrFlight.replace(/,/g, ""));

  const afterNdep = parseInt(afterN.depFlight.replace(/,/g, ""));
  const afterNarr = parseInt(afterN.arrFlight.replace(/,/g, ""));

  // 여객기 출발 데이터
  const chartYdep = {
    labels: { display: false },
    datasets: [
      {
        label: "코로나 전 / 후 여객기 국제선 출발 항공기 비율",
        data: [beforeYdep, afterYdep],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#42a5f5", "#ef5350"],
        fill: true,
        borderRadius: 4,
        cutout: "50%",
      },
    ],
  };

  // 여객기 도착 데이터
  const chartYarr = {
    labels: { display: false },
    datasets: [
      {
        label: "코로나 전 / 후 여객기 국제선 도착 비율",
        data: [beforeYarr, afterYarr],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#42a5f5", "#ef5350"],
        fill: true,
        borderRadius: 4,
        cutout: "50%",
      },
    ],
  };

  // 화물기 출발 데이터
  const chartNdep = {
    labels: { display: false },
    datasets: [
      {
        label: "코로나 전 / 후 화물기 국제선 출발 비율",
        data: [beforeNdep, afterNdep],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#42a5f5", "#ef5350"],
        fill: true,
        borderRadius: 4,
        cutout: "50%",
      },
    ],
  };

  // 화물기 도착 데이터
  const chartNarr = {
    labels: { display: false },
    datasets: [
      {
        label: "코로나 전 / 후 화물기 국제선 도착 비율",
        data: [beforeNarr, afterNarr],
        borderWidth: 2,
        hoverBorderWidth: 3,
        backgroundColor: ["#42a5f5", "#ef5350"],
        fill: true,
        borderRadius: 4,
        cutout: "50%",
      },
    ],
  };

  return (
    <DataSet>
      <OneData>
        <Airport>여객기</Airport>

        <ChartDiv>
          <DoughnutContainer>
            <h3>Departure</h3>
            <Doughnut data={chartYdep} />
          </DoughnutContainer>

          <DoughnutContainer>
            <h3>Arrive</h3>
            <Doughnut data={chartYarr} />
          </DoughnutContainer>
        </ChartDiv>
      </OneData>

      <OneData>
        <Airport>화물기</Airport>

        <ChartDiv>
          <DoughnutContainer>
            <h3>Departure</h3>
            <Doughnut data={chartNdep} />
          </DoughnutContainer>

          <DoughnutContainer>
            <h3>Arrive</h3>
            <Doughnut data={chartNarr} />
          </DoughnutContainer>
        </ChartDiv>
      </OneData>
    </DataSet>
  );
}

export default DataChartICN;

const DataSet = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OneData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 19px 19px 38px #9b9b9b, -19px -19px 38px #ffffff;
  margin: 10px;
`;

const Airport = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #546e7a;
  display: inline-block;
  width: 150px;
  border-bottom: 3px solid #546e7a;
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  margin-bottom: 20px;
`;

const DoughnutContainer = styled.div`
  width: 300px;
  padding: 10px;
  // canvas {
  //   max-width: 100%;
  // }
  max-width: 100%;
`;

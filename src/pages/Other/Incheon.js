import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import DataChartICN from "../../UI/DataChartICN";

function Incheon({
  API_KEY,
  fromMonthAfter,
  toMonthAfter,
  fromMonthBefore,
  toMonthBefore,
}) {
  // 2년 전후 여객기
  const url_after_Y = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthAfter}&to_month=${toMonthAfter}&periodicity=0&domestic_foreign=I&type=json&pax_cargo=Y`;
  const url_before_Y = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthBefore}&to_month=${toMonthBefore}&periodicity=0&domestic_foreign=I&type=json&pax_cargo=Y`;

  // 2년 전후 화물기
  const url_after_N = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthAfter}&to_month=${toMonthAfter}&periodicity=0&domestic_foreign=I&type=json&pax_cargo=N`;
  const url_before_N = `/getTotalNumberOfFlight?serviceKey=${API_KEY}&from_month=${fromMonthBefore}&to_month=${toMonthBefore}&periodicity=0&domestic_foreign=I&type=json&pax_cargo=N`;

  const [icnBeforeYdata, setIcnBeforeYdata] = useState({
    isLoading: true,
    data: [],
  });

  const [icnAfterYdata, setIcnAfterYdata] = useState({
    isLoading: true,
    data: [],
  });

  const [icnBeforeNdata, setIcnBeforeNdata] = useState({
    isLoading: true,
    data: [],
  });

  const [icnAfterNdata, setIcnAfterNdata] = useState({
    isLoading: true,
    data: [],
  });

  async function getICN() {
    // 인천 여객기 데이터
    await axios.get(url_before_Y).then((response) => {
      const yListBefore = response.data.response.body.items[5];

      setIcnBeforeYdata({
        isLoading: false,
        data: yListBefore,
      });
    });

    await axios.get(url_after_Y).then((response) => {
      const yListAfter = response.data.response.body.items[5];

      setIcnAfterYdata({
        isLoading: false,
        data: yListAfter,
      });
    });

    // 인천 화물기 데이터
    await axios.get(url_before_N).then((response) => {
      const nListBefore = response.data.response.body.items[0];

      setIcnBeforeNdata({
        isLoading: false,
        data: nListBefore,
      });
    });

    await axios.get(url_after_N).then((response) => {
      const nListAfter = response.data.response.body.items[0];

      setIcnAfterNdata({
        isLoading: false,
        data: nListAfter,
      });
    });
  }

  console.log("Before Y", icnBeforeYdata.data);
  console.log("after Y", icnAfterYdata.data);
  console.log("Before N", icnBeforeNdata.data);
  console.log("After N", icnAfterNdata.data);

  useEffect(() => {
    getICN();
  }, []);

  const { isLoading } = icnAfterNdata;

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
              <Title>코로나 전・후 2년 인천 공항 운영 현황</Title>

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
            <MainContent>
              <div>
                <DataChartICN
                  beforeY={icnBeforeYdata.data}
                  afterY={icnAfterYdata.data}
                  beforeN={icnBeforeNdata.data}
                  afterN={icnAfterNdata.data}
                />
              </div>
              <OneData>
                <h3>- 여객기 -</h3>
                <p>
                  코로나 이전에는 30만대 넘게 운영이 됐는데, 코로나 이후 해외
                  입출국에 규제가 생기면서 급격하게 줄어드는 모습을 확인 할 수
                  있다.
                </p>
                <h3>- 화물기 -</h3>
                <p>
                  여객기와 비교했을 때 코로나 전과 후의 차이는 크게 나지 않는다.
                  눈여겨 볼점은 코로나 이후가 이전에 비해 증가했다는 것이다.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>
                  ** 국제선 수송기는 인천 공항에서만 운영되고 있다. **
                </p>
              </OneData>
            </MainContent>
          </div>
        )}
      </div>
    </div>
  );
}

export default Incheon;

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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OneData = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 19px 19px 38px #9b9b9b, -19px -19px 38px #ffffff;
  margin: 10px;
  padding: 10px;
`;

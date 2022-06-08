import AirportLocation from "./AirportLocation";
import styled from "styled-components";

function Map() {
  const airportName = [
    {
      name: "김포 공항",
      keyword: "김포공항",
    },
    {
      name: "김해 공항",
      keyword: "김해공항",
    },
    {
      name: "대구 공항",
      keyword: "대구공항",
    },
    {
      name: "무안 공항",
      keyword: "무안공항",
    },
    {
      name: "양양 공항",
      keyword: "양양공항",
    },
    {
      name: "인천 공항",
      keyword: "인천공항",
    },
    {
      name: "제주 공항",
      keyword: "제주공항",
    },
    {
      name: "청주 공항",
      keyword: "청주공항",
    },
  ];

  return (
    <Mappage>
      <MapPart>
        <AirportLocation />
      </MapPart>

      <ListPart>
        <h1>✈️ 공항 위치 및 링크</h1>
        <Lists>
          {airportName.map((data) => (
            <List>
              {data.name} :{" "}
              <a
                href={`https://map.kakao.com/link/search/${data.keyword}`}
                target={"_blank"}
              >
                {data.keyword} 바로가기
              </a>
            </List>
          ))}
        </Lists>
      </ListPart>
    </Mappage>
  );
}

export default Map;

const Mappage = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 70px;
`;

const MapPart = styled.div`
  margin-right: 200px;
`;

const ListPart = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

const Lists = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

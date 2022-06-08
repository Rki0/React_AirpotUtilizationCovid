/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";

const { kakao } = window;

function AirportLocation() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      // center는 청계천 소라탑을 중심으로 찍어놓자
      center: new kakao.maps.LatLng(36.7219682, 127.4958842),
      level: 13,
    };

    let map = new kakao.maps.Map(container, options);

    let positions = [
      {
        title: "김포 공항",
        latlng: new kakao.maps.LatLng(37.562402, 126.801289),
        content: "<div>김포 공항</div>",
      },
      {
        title: "김해 공항",
        latlng: new kakao.maps.LatLng(35.17322, 128.9464591),
        content: "<div>김해 공항</div>",
      },
      {
        title: "대구 공항",
        latlng: new kakao.maps.LatLng(35.9001012, 128.6377214),
        content: "<div>대구 공항</div>",
      },
      {
        title: "무안 공항",
        latlng: new kakao.maps.LatLng(34.9935753, 126.3878557),
        content: "<div>무안 공항</div>",
      },
      {
        title: "양양 공항",
        latlng: new kakao.maps.LatLng(38.058812, 128.6629583),
        content: "<div>양양 공항</div>",
      },
      {
        title: "인천 공항",
        latlng: new kakao.maps.LatLng(37.4601908, 126.4406957),
        content: "<div>인천 공항</div>",
      },
      {
        title: "제주 공항",
        latlng: new kakao.maps.LatLng(33.5104135, 126.4913534),
        content: "<div>제주 공항</div>",
      },
      {
        title: "청주 공항",
        latlng: new kakao.maps.LatLng(36.7219682, 127.4958842),
        content: "<div>청주 공항</div>",
      },
    ];

    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });

      let infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content,
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }, []);

  return (
    <div className={cn("Map")}>
      <div
        className={cn("MapContainer")}
        id="map"
        style={{ width: "800px", height: "700px" }}
      ></div>
    </div>
  );
}

export default AirportLocation;

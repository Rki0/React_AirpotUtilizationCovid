// 이 파일에 데이터 불러오는 걸 옮기고 pages/Home/useHome 처럼 만들어야할듯.

import React from "react";
import DisplayFlight from "./DisplayFlight";

function FetchFlight() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <div>
      <DisplayFlight
        API_KEY={API_KEY}
        fromMonthAfter={202001}
        toMonthAfter={202112}
        fromMonthBefore={201801}
        toMonthBefore={201912}
      />
    </div>
  );
}

export default FetchFlight;

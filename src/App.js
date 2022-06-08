import { Route, Routes } from "react-router-dom";
import FetchFlight from "./fetchFlight";
import FetchFlightICN from "./fetchFlightICN";
import NavBar from "./Layout/NavBar";
import Map from "./pages/Other/Map";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<FetchFlight />} />
          <Route path="/icn" element={<FetchFlightICN />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

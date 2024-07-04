import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const initialAirportsData = [
  {
    id: 1,
    name: "Indra gandhi international airport",
    country: "India",
    code: "DEL",
    terminals: 3,
  },
  {
    id: 2,
    name: "Dubhan international airport",
    country: "UAE",
    code: "DXB",
    terminals: 5,
  },
  {
    id: 3,
    name: "Heathrow international airport",
    country: "England",
    code: "LHR",
    terminals: 6,
  },
  {
    id: 4,
    name: "Heathrow international airport",
    country: "England",
    code: "LHR",
    terminals: 6,
  },
  {
    id: 5,
    name: "Heathrow international airport",
    country: "England",
    code: "LHR",
    terminals: 6,
  },
];

const Airports = () => {
  const [airports, setAirports] = useState(initialAirportsData);
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-2 w-5/6 bg-green-300">
          <div className=" flex justify-between w-fit">
            <h1>Airports</h1>
            <button>+Addnew</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airports;

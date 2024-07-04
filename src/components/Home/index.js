import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-2">
          <h1 className="text-red-600">Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

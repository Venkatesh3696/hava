import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "@spectrum-icons/workflow/Home";

const Sidebar = () => {
  return (
    <div className="p-2 border w-1/5 h-full">
      {/* <div>
        <h1>Home</h1>
        <h1>Dashboard</h1>
      </div>
      <div>
        <h1>Services</h1>
        <h1>Airports</h1>
        <h1>Videos</h1>
      </div>
      <h2>Others</h2>
      <div>
        <h1>List 1</h1>
        <h1>List 2</h1>
      </div> */}
      <>
        <div className="sidebar_items">
          <div className="sidebar_item">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className="sidebar_item">
            <Link to={"/airports"}>
              <p>Airports</p>
            </Link>
          </div>
          <div className="sidebar_item">
            <p>Contact</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;

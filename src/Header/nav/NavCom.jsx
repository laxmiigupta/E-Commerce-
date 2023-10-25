import React from "react";
import Home from "./Home";
import Services from "./service/Services";
import About from "./About";
import "./home.css";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import Error404 from "./Error404";
import BikeService from "./service/BikeService";
import CarService from "./service/CarService";

export default function NavCom() {
  return (
    <>
      <BrowserRouter>
        <div className="container d-flex gap-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>Abount</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contactt"}>Contact Us</NavLink>
        </div>
        <Routes>
            
          <Route path="/" element={<Home />} />
          <Route path="/service">
            <Route index element={<Services />} />
            <Route path="bike" element={<BikeService />} />
            <Route path="car" element={<CarService />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
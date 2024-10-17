import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center py-3 align-items-center">
      <div className="col-2 d-flex justify-content-center align-items-center fw-bold">
        <NavLink to={"/"}>
          <img src="../public/images.png" alt="" width={50} />
        </NavLink>
      </div>

      <nav className="d-flex col-7 fs-5 text-dark justify-content-center gap-3  align-items-center">
        <div className="fw-bold ">
          <NavLink to={"/"} className={({isActive})=> isActive?'text-danger':'text-dark'}>
            <div className=" fs-5 fw-bold ">Home</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink to={"/AboutUS"} className={({isActive})=> isActive?'text-danger':'text-dark'}>
            <div className=" fs-5 fw-bold">About Us</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink to={"/GitHub"} className={({isActive})=> isActive?'text-danger':'text-dark'}>
            <div className=" fs-5 fw-bold">GitHub</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink to={"/Projects"} className={({isActive})=> isActive?'text-danger':'text-dark'}>
            <div className=" fs-5 fw-bold ">Projects</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink to={"/ContactUS"} className={({isActive})=> isActive?'text-danger':'text-dark'}>
            <div className=" fs-5 fw-bold ">Contact US</div>
          </NavLink>
        </div>
      </nav>

      <div className="col-3 h-100  d-flex align-items-center justify-content-end flex-row">
        <div className="text-dark  fs-5 fw-bold m-auto ">Log in</div>
        <button className="btn fw-bold fs-5 border-danger border  text-danger">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;

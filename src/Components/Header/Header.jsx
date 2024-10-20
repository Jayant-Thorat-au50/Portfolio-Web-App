import React from "react";

import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
<>

<div className="d-lg-flex justify-content-center py-1 align-items-center header  d-none">
      <div className="col-2 d-flex justify-content-center align-items-center fw-bold">
        <NavLink to={"/"}>
          <img
            src="/images.png"
            alt=""
            className="header-img border border-2 border-success"
          />
        </NavLink>
      </div>

      <nav className="d-flex col-7 fs-5 text-dark justify-content-center gap-3  align-items-center">
        <div className="fw-bold ">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-dark" : "text-dark")}
          >
            <div className=" fs-5 fw-bold ">Home</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/AboutUS"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold">About Us</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/GitHub"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold">GitHub</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/Projects"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold ">Projects</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/ContactUS"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold ">Contact Us</div>
          </NavLink>
        </div>
      </nav>

      <div className="col-3   d-flex align-items-center justify-content-start  flex-row">
        <div className="text-dark  fs-5 fw-bold d-flex justify-content-center align-items-center  col-4 "><div>Log in</div></div>
        <button className="btn fw-bold fs-5 border-warning border col-6 text-warning">
          Get Started
        </button>
      </div>
    </div>


{/* Header for ythe smaller screen size with hamburger mainu */}





    <div className="d-flex justify-content-between py-1 align-items-center header  d-lg-none">
      <div className="col-2 d-flex justify-content-center align-items-center fw-bold border">
        <NavLink to={"/"}>
          <img
            src="/images.png"
            alt=""
            className="header-img border border-2 border-success"
          />
        </NavLink>
      </div>

      <div className="col-8    d-flex align-items-center justify-content-lg-start justify-content-center  flex-row">
        <div className="text-dark fs-5 fw-bold d-flex justify-content-center align-items-center col-lg-4 col-3 "><div>Log in</div></div>
        <button className="btn fw-bold fs-5 border-warning border col-lg-6 col-6 text-warning">
          Get Started
        </button>
      </div>

      <div className="border col-1 ">

      </div>

{/*

      <nav className="d-flex col-7 fs-5 text-dark justify-content-center gap-3  align-items-center">
        <div className="fw-bold ">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-dark" : "text-dark")}
          >
            <div className=" fs-5 fw-bold ">Home</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/AboutUS"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold">About Us</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/GitHub"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold">GitHub</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/Projects"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold ">Projects</div>
          </NavLink>
        </div>
        <div className="fw-bold ">
          <NavLink
            to={"/ContactUS"}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-dark"
            }
          >
            <div className=" fs-5 fw-bold ">Contact Us</div>
          </NavLink>
        </div>
      </nav> */}

      
    </div>

</>
  );
}

export default Header;

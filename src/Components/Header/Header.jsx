import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <div className="d-lg-flex  justify-content-center py-1 align-items-center header d-none">
        <div className="col-2 d-flex justify-content-center align-items-center fw-bold">
          <NavLink to={"/"}>
            <img src="/images.png" alt="" className="header-img " />
          </NavLink>
        </div>

        <nav className="d-flex col-7 fs-5 text-dark justify-content-center gap-3  align-items-center">
          <div className="fw-bold ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-dark" : "text-dark"
              }
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
          <div className="text-dark  fs-5 fw-bold d-flex justify-content-center align-items-center  col-4 ">
            <div>Log in</div>
          </div>
          <button className="btn fw-bold fs-5 border-warning border col-6 text-warning">
            Get Started
          </button>
        </div>
      </div>

      {/* Header for the smaller screen size with hamburger mainu */}

      <div className="d-flex justify-content-between  py-1 align-items-end col-12 flex-column header  d-lg-none">
        <section className=" col-12 d-flex  justify-content-between align-items-center  ">
          <div className="col-2 d-flex justify-content-center align-items-center fw-bold ">
            <NavLink to={"/"} onClick={()=> setHamburger(false)}>
              <img src="/images.png" alt="" className="header-img "  />
            </NavLink>
          </div>

          <div className="col-8    d-flex align-items-center justify-content-lg-start justify-content-center  flex-row">
            <div className="text-dark fs-5 fw-bold d-flex justify-content-center align-items-center col-lg-4 col-3 ">
              <div>Log in</div>
            </div>
            <button className="btn fw-bold fs-5 border-success border p-0 col-lg-6 col-6 text-success">
              Get Started
            </button>
          </div>

          <div className=" col-1 fs-1 ">
            {hamburger ? (
              <ImCross onClick={() => setHamburger(!hamburger)} />
            ) : (
              <IoReorderThreeSharp onClick={() => setHamburger(!hamburger)} />
            )}
          </div>
        </section>

        <div
          className={
            hamburger
              ? "d-block m-1 text-end col-4 mobile-navbar"
              : " d-none  "
          }
        >
          <ul className="  d-flex flex-column align-items-center justify-content-center ">
            <li className=" p-1  " onClick={() => setHamburger(false)}>
              <NavLink to={"/"} className="text-dark    nav-ele-mobile fw-bold fs-5">
                Home
              </NavLink>
            </li>
            <li className="p-1 " onClick={() => setHamburger(false)}>
              <NavLink to={"/AboutUs"} className="text-dark fw-bold  nav-ele-mobile fs-5">
                About Us
              </NavLink>
            </li>
            <li className="p-1 " onClick={() => setHamburger(false)}>
              <NavLink to={"/Projects"} className="text-dark fw-bold  nav-ele-mobile fs-5">
                Projects
              </NavLink>
            </li>
            <li className="p-1" onClick={() => setHamburger(false)}>
              <NavLink to={"/GitHub"} className="text-dark fw-bold  nav-ele-mobile fs-5">
                GitHub
              </NavLink>
            </li>
            <li className="p-1" onClick={() => setHamburger(false)}>
              <NavLink to={"/ContactUs"} className="text-dark fw-bold  nav-ele-mobile  fs-5">
                Contact Us
              </NavLink>
            </li>
          </ul>
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

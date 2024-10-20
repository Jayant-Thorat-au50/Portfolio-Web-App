import React from "react";
import NavEle from "./NavEleFooter/NavEle";
import "./Footer.css";

function Footer() {
  return (
    <div className="col-12 py-4 gap-lg-0 gap-4 d-flex justify-content-lg-evenly justify-content-between align-items-start footer-bg text-warning fs-5 fw-bold">
      <div className=" col-lg-4  col-3 d-flex justify-content-center align-items-center">
        <img src="images.png" alt="" className="footer-img" />
      </div>
      <nav className="col-lg-5   col-9 ">
        <div className="col-12   d-flex align-items-start justify-content-lg-evenly justify-content-between">
          <div className=" col-4">
            <h4 className=" text-warning"> Resources</h4>
            <NavEle navType={"Home"} LinkTo={"/"} />
            <NavEle navType={"About"} LinkTo={"/AboutUS"} />
          </div>
          <div className="col-4">
            <h4 className=" text-warning"> Follow Us</h4>
            <NavEle navType={"GitHub"} LinkTo={"/GitHub"} />
            <NavEle navType={"Discord"} LinkTo={"/GitHub"} />
          </div>
          <div className=" col-4">
            <h4 className=" text-waring"> Legal</h4>
            <NavEle navType={"Privacy policy"} LinkTo={"/"} />
            <NavEle navType={"Terms and conditions"} LinkTo={"/"} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;

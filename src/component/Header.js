import React from "react";
import {  FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterestP, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div className="container ">
      <div className="row header_top d-flex space-between align-center">
        <div className="left_header d-flex ">
          <div className="left_content">
            <div className="contact_content d-flex align-center justify-center">
              <div className="contact_icon d-flex align-center justify-center">
                <FaPhoneAlt />
              </div>
              <div className="contact_num  d-flex align-center justify-center">| <a href="#">+01 (977) 2599 12</a></div>
            </div>
          </div>
          <div className="right_content">
            <div className="email_content d-flex align-center">
              <div className="email_icon">
                <IoMail />
              </div>
              <div className="contact_num">|<a href="#">bloodforyou@gmail.com</a></div>
            </div>
          </div>
        </div>
        <div className="right_header d-flex">
          <div><a href="#"><FaFacebookF></FaFacebookF></a></div>
          <div><a href="#"><FaTwitter></FaTwitter></a></div>
          <div><a href="#"><FaInstagram></FaInstagram></a></div>
          <div><a href="#"><FaPinterestP></FaPinterestP></a></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;

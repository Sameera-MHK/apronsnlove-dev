import React from "react";
import "./Contact_out.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact_out = () => {
  return (
    <div className="contact_out">
      <div className="wrapper">
        <span> BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail.." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact_out;

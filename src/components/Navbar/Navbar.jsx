import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              <HomeIcon />
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              Shop
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/almond-flour">
              Almond Flour
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/coconut-sugar">
              Coconut Sugar
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            <img src={require("../../img/logo.png")} alt="" />
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/nut-butter">
              Nut Butter
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/chocolate-chips">
              Chocolate Chips
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Conatct
            </Link>
          </div>

          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
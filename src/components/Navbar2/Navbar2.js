import React from "react";
import "./Navbar2.css";


function Navbar2() {

  return (

    <div className="header">
      
      <div className="header__option">
        <span className="header__optionLineOne">All</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Best Sellers</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Mobiles</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Customer Services</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Today's Deals</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Fashion</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Electronics</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Prime</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Home & Kitchen</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Amazon Pay</span>
      </div>
      
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN&gl=US"
          target="_blank"
        >
          <span className="header__optionLineOne">Shopping made easy | Download the app</span>
        </a>
        </div>
        

    </div>
      );
}
export default Navbar2;

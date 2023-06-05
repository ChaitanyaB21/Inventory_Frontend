import React from "react";
import Input from "./Input";

const SideNav = () => {
  return (
    <div id="mnu" className="msidenav">
      <div className="logo">Solar Ladder</div>
      <form action="/" method="post">
        <Input />

        <div className="spacer"></div>
        <button type="submit" name="submit" className="mbtn">
          <i className="fa fa-list icon" aria-hidden="true"></i> Add Item
        </button>
        {/* <button className="mbtn"><i className="fa fa-shopping-cart icon" aria-hidden="true"></i> Option Two</button>
        <button className="mbtn"><i className="fa fa-user icon" aria-hidden="true"></i> Option Three</button> */}
      </form>
    </div>
  );
};

export default SideNav;

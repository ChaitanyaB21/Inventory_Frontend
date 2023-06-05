import React from "react";

const Input = () => {
    return (
        <div className="searchbar">
            <input placeholder="Item Id" name="ItemId" className="search" type="text" />
            <input placeholder="Item Name" name="ItemName" className="search" type="text" />
            <input placeholder="Price per unit" name="ItemPrice" type="number" className="search" />
            <input placeholder="Stock" name="ItemStock" className="search" type="number" />
            {/* <button className="sbtn"><i className="fa fa-search" aria-hidden="true"></i></button> */}
        </div>
    )
}

export default Input;
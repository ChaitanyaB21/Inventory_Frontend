import React, { useState } from "react";
import Input from "./Input";
import Content from "./Content";

const SideNav = (props) => {
    const [initItemsArr, setInitItemsArr] = useState([

    ]);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let ItemIdValue = event.target.ItemId.value;
        let ItemNameValue = event.target.ItemName.value;
        let ItemPriceValue = event.target.ItemPrice.value;
        let ItemStockValue = event.target.ItemStock.value;

        let formData = {
            ItemId: ItemIdValue,
            ItemName: ItemNameValue,
            ItemPrice: ItemPriceValue,
            ItemStock: ItemStockValue,
        }

        if (ItemIdValue.trim().length > 0 && ItemNameValue.trim().length > 0 && ItemPriceValue.trim().length > 0 && ItemStockValue.trim().length > 0) {
            setInitItemsArr((prev) => [
                ...prev,
                formData
            ]);

            const response = await fetch("https://inventorybackend-production.up.railway.app/form", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            // const data = await response.json();

            if(response.ok){
                console.log();
            }
        }

    };

    return (
        <React.Fragment>
            <div className="sidenav">
                <div className="logo">Solar <span>Ladder.</span></div>
                <form onSubmit={handleFormSubmit} action="/" method="post">
                    <Input />

                    <div className="spacer"></div>
                    <button type="submit" name="submit" className="mbtn">
                        <i className="fa fa-list icon" aria-hidden="true"></i> Add Item
                    </button>
                    {/* <button className="mbtn"><i className="fa fa-shopping-cart icon" aria-hidden="true"></i> Option Two</button>
          <button className="mbtn"><i className="fa fa-user icon" aria-hidden="true"></i> Option Three</button> */}
                </form>
            </div>
            <Content itemsArr={initItemsArr} />
        </React.Fragment>
    );
};

export default SideNav;

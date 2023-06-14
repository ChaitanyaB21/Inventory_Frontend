import React, { useState } from "react";
import Input from "./Input";
import Content from "./Content";

const SideNav = (props) => {
    const [initItemsArr, setInitItemsArr] = useState([]);
    const [showSideNav, setShowSideNav] = useState(false);
    const [showBackDrop , setShowBackDrop] = useState(false);

    const onShowNavBtnClick = () => {
        setShowSideNav(true);
        setShowBackDrop(true);
    }

    const handleAddBtnClick = () => {
        setShowSideNav(false);
        setShowBackDrop(false);
    }

    const handleBackdropClick = () => {
        setShowSideNav(false);
        setShowBackDrop(false);
    }

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
        };

        if (
            ItemIdValue.trim().length > 0 &&
            ItemNameValue.trim().length > 0 &&
            ItemPriceValue.trim().length > 0 &&
            ItemStockValue.trim().length > 0
        ) {
            // event.target.reset();
            setInitItemsArr((prev) => [...prev, formData]);

            const response = await fetch(
                "https://inventorybackend-production.up.railway.app/form",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                console.log();
            }

            // Reset the form

        }
    };

    return (
        <React.Fragment>
            
            <div className={`sidenav ${showSideNav ? "show" : ""}`}>
                <div className="logo">
                    Solar <span>Ladder.</span>
                </div>
                {/* <p>Add a new item to inventory</p> */}
                <form onSubmit={handleFormSubmit} action="/" method="post">
                    <Input />

                    <div className="spacer"></div>
                    <button type="submit" onClick={handleAddBtnClick} name="submit" className="mbtn">
                        <i className="bi bi-list-columns-reverse"></i> Add
                    </button>
                </form>
            </div>
            {/* <div className={`${showSideNav ? "sideNavModal" : "" }`} ></div> */}
            <div onClick={handleBackdropClick} className={` backdrop ${showBackDrop ? "show" : ""}`}></div>
            <Content onShowNav={onShowNavBtnClick} onDelBtnClick={props.onDelBtnClick} itemsArr={initItemsArr} />

        </React.Fragment>
    );
};

export default SideNav;

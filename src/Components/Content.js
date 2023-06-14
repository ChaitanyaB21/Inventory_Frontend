import React, { useEffect, useState } from "react";
import PencilBtn from "./PencilBtn";
import TrashBtn from "./TrashBtn";

const Content = (props) => {
    const [itemsArr, setInitItemsArr] = useState([]);

    const DBdata = async () => {
        const response = await fetch("https://inventorybackend-production.up.railway.app/form", {
            method: 'GET',
        });

        const arrdata = await response.json()
        setInitItemsArr(arrdata);
    }

    useEffect(() => {
        DBdata()
    }, [itemsArr])


    return (
        <div className="content-area">
            <div className="mobilebar">
                <div className="logo sml">iX</div>
                <div className="mbh">
                    <button className="mnubtn" >
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            
            <div className="header" >
                <div>
                    <div className="page-title">Inventory</div>
                    <div className="page-desc">View and manage your stock</div>
                </div>
                <button onClick={props.onShowNav} className="inventory-button"><i className="bi bi-plus-circle"></i> Add Item</button>
            </div>
            {itemsArr.map((item) => (
                <div className="content-bar" key={item._id}>
                    <div className="itemnum">{item.itemid}</div>
                    <div className="itemtitle">{item.name}</div>
                    <div className="itemprice">
                        <span>&#8377;</span> {item.price} per item
                    </div>
                    <div className="itemstock">{item.stock}</div>
                    <div className="btncontainer">
                        <PencilBtn id={item._id} />
                        <TrashBtn onDelBtnClick={props.onDelBtnClick} id={item._id} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;

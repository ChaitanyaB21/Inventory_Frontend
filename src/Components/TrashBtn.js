import React, { useState } from "react";
import DeletePopUp from "./Modal";
import { createPortal } from "react-dom";

const Trash = (props) => {
    const [showModal, setShowModal] = useState(false);

    const trashBtnClickHandler = () => {
        setShowModal(true);
    };

    const onCrossBtnClick = () => {
        setShowModal(false);
    };

    const handleClick = async (event) => {
        setShowModal(false);
        const clickedBtnId = event.currentTarget.id;
        
        const response = await fetch(
            `https://inventorybackend-production.up.railway.app/delete/${clickedBtnId}`,
            {
                method: "DELETE",
            }
        );

        if (response.ok) {
            console.log();
        }
    };

    return (
        <React.Fragment>
            <button
                onClick={trashBtnClickHandler}
                id={props.id}
                className="cbbtn trashBtn"
            >
                <i className="bi bi-trash3-fill"></i>
            </button>
            {showModal &&
                createPortal(
                    <DeletePopUp onCrossBtnClick={onCrossBtnClick}>
                        <h1>Warning</h1>
                        <p>This entry will be <b>permanantly deleted</b> from the database. Are you sure you want to delete this entry.</p>
                        <button id={props.id} onClick={handleClick} >Yes</button>
                        {/* <button>No</button> */}
                    </DeletePopUp>,
                    document.getElementById("popUp")
                )}
        </React.Fragment>
    );
};

export default Trash;

import React, { useState } from "react";
import DeletePopUp from "./Modal";


const PencilBtn = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [pencilBtnId, setPencilBtnId] = useState("");

    const handleClick = (event) => {
        setShowForm(true);
        setPencilBtnId(event.currentTarget.id);
    };

    const handleCancelClick = () => {
        setShowForm(false);
    }

    const handleChangeformSubmit = async (event) => {

        setShowForm(false);

        event.preventDefault();
        console.log(event.target.changedPrice.value);
        const changeformData = {
            id: event.target.changedId.value,
            name: event.target.changedName.value,
            price: event.target.changedPrice.value,
            stock: event.target.changedStock.value,
        }

        const response = await fetch(`https://inventorybackend-production.up.railway.app/update/${pencilBtnId}`, {
            method: 'POST',
            body: JSON.stringify(changeformData),
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            console.log();
        }



    }

    return (
        <React.Fragment>
            {!showForm ? (
                <button onClick={handleClick} id={props.id} type="button" className="cbbtn">
                    <i className="bi bi-pencil-fill"></i>
                </button>
            ) : (

                <DeletePopUp onCrossBtnClick={handleCancelClick} >
                    <form onSubmit={handleChangeformSubmit} >
                        <h1>Changes List</h1>
                        <p>Enter changes that you want to make</p>
                        <input name="changedId" type="text" placeholder="changed Id" ></input>
                        <input name="changedName" type="text" placeholder="changed Name" ></input>
                        <input name="changedPrice" type="number" placeholder="changed Price" ></input>
                        <input name="changedStock" type="number" placeholder="changed Stock" ></input>
                        <button type="submit" name="submit" >Change</button>
                        {/* <button onClick={handleCancelClick} >Close</button> */}
                    </form>
                </DeletePopUp>
            )}
        </React.Fragment>
    );
};

export default PencilBtn;

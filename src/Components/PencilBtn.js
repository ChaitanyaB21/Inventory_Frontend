import React, { useState } from "react";

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
        event.preventDefault();
        console.log(event.target.changedPrice.value);
        const changeformData = {
            id: event.target.changedId.value,
            name: event.target.changedName.value,
            price: event.target.changedPrice.value,
            stock: event.target.changedStock.value,
        }

        const response = await fetch(`http://localhost:4000/update/${pencilBtnId}`, {
            method: 'POST',
            body: JSON.stringify(changeformData),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        setShowForm(false);
    }

    return (
        <React.Fragment>
            {!showForm ? (
                <button onClick={handleClick} id={props.id} type="button" className="cbbtn">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            ) : (
                <form onSubmit={handleChangeformSubmit} >
                    <input name="changedId"  type="text" placeholder="changed Id" ></input>
                    <input name="changedName" type="text" placeholder="changed Name" ></input>
                    <input name="changedPrice" type="number" placeholder="changed Price" ></input>
                    <input name="changedStock" type="number" placeholder="changed Stock" ></input>
                    <button type="submit" name="submit" >Change</button>
                    <button onClick={handleCancelClick} >Close</button>
                </form>
            )}
        </React.Fragment>
    );
};

export default PencilBtn;

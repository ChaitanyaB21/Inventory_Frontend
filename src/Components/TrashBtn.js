import React from "react";

const Trash = (props) => {

    const handleClick = async (event) => {
        
        const clickedBtnId = event.currentTarget.id;
        console.log(clickedBtnId);
        const response = await fetch(`http://localhost:4000/delete/${clickedBtnId}` , {
            method: 'DELETE'
        });

    }

    return (
        <button onClick={handleClick} id={props.id}  className="cbbtn">
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
}

export default Trash
import React from "react";

const Trash = (props) => {

    const handleClick = async (event) => {
        
        const clickedBtnId = event.currentTarget.id;
        console.log(clickedBtnId);
        const response = await fetch(`https://inventorybackend-production.up.railway.app/delete/${clickedBtnId}` , {
            method: 'DELETE'
        });

        if(response.ok){
            console.log();
        }
    }

    return (
        <button onClick={handleClick} id={props.id}  className="cbbtn">
            Del
        </button>
    )
}

export default Trash

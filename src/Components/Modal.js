import React from "react";
import classes from "./Modal.module.css";

const DeletePopUp = (props) => {

    return <React.Fragment>
        <div className={classes.modal}>
          <div className={classes['modal-content']}>
            <span className={classes.close} onClick={props.onCrossBtnClick} >
              &times;
            </span>
            {props.children}
            {/* <button>No</button> */}
          </div>
        </div>
      
    </React.Fragment>
}

export default DeletePopUp;
import React, { useState } from "react";
import MobSideNav from "./Components/MobSideNav";

const App = () => {

    const [showPopUp, setShowPopUp] = useState(false);

    const handleDelBtnClick = () => {
        setShowPopUp(true);
    }



    return (
        <React.Fragment>
            

            {/* <SideNav /> */}
            <MobSideNav onDelBtnClick={handleDelBtnClick} />
            {/* <Content /> */}

        </React.Fragment>
    )
}

export default App;
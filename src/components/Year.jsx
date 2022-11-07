import React from "react";
import ChangeReact from "./ChangeYear";

const Year=()=>{

    return(
        <div>
            <ChangeReact actualyear={new Date().getFullYear()}>

            </ChangeReact>
        </div>
    )
}
export default Year
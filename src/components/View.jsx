import React from "react";
import "./View.css"
import { Button } from "reactstrap"

export default function View ({nasaImage, weatherData}) {

    return (
        <div>
            <img src={nasaImage.url} width="600"  alt=""/>
            <div>
                <label></label>
            </div>
            {console.log(nasaImage, weatherData)}
        </div>
    )

}
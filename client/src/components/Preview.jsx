import "./style.css"

import React from 'react'

const Preview = (props) => {


    return (
        <><div class="card" style={{ color: "#000" }} >
            <img id="img" src={props.current.picture} />
            <div className="container">
                <h3>Name: {props.current.name}</h3>
                <div>
                    <h4>Job: {props.current.job}</h4>
                    <h4>Contact: {props.current.contact}</h4>
                    <h4>Adress: {props.current.adress}</h4>
                    <h4>Recommandations: {props.current.recommandations}</h4>
                </div>
            </div>
        </div>
        </>

    )

}

export default Preview
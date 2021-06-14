import "./style.css"

import React from 'react'

const Preview = (props) => {


    return (
        <><div className="card" style={{ color: "#000" }} >
            <img id="img" src={props.current.picture} />
            <div className="container">
                <h3>Name: {props.current.name}</h3>
                <div>
                    <h4>Job: {props.current.job}</h4>
                    <h4>Contact: {props.current.contact}</h4>
                    <h4>Address: {props.current.adress}</h4>
                    <h4>Recommendations: {props.current.recommandations}</h4>
                    <button id="recommendation" onClick={() => {
                        alert("Thank you for supporting this business😍")
                        props.recommandations(props.current._id, "recommand")
                        document.location.reload(true)

                    }}> I recommend this business! </button>
                    <> </>
                    <button id="Norecommendation" onClick={() => {
                        alert("we are sorry to hear that 😔")
                        props.recommandations(props.current._id, "Norecommand")
                        document.location.reload(true)

                    }}> I don't recommend this business! </button>
                </div>
            </div>
        </div>
        </>

    )

}

export default Preview
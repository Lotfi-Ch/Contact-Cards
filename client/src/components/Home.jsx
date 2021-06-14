
import "./style.css"

import React from 'react'

const Home = (props) => {


    return (
        <>
            {props.cards && props.cards.map((card) =>
                <div className="card" style={{
                    color: "#000"
                }} key={props.cards.indexOf(card)}>
                    <img id="img" src={card.picture} onClick={() => {
                        console.log("helloo", props)
                        props.change(card)
                        props.view("preview")
                    }} />
                    <div className="container">
                        <h3>Name: {card.name}</h3>
                        <div>
                            <h4>Job: {card.job}</h4>
                            <h4>Contact: {card.contact}</h4>
                            <h4>Address: {card.adress}</h4>
                            <h4>Recommendations: {card.recommandations}</h4>
                        </div>
                    </div>
                </div>
            )}
        </>

    )

}

export default Home

import { Card } from 'react-bootstrap';

import "./style.css"

import React from 'react'

const Home = (props) => {


    return (
        <>
            {props.cards && props.cards.map((card) =>
                <div class="card" style={{
                    color: "#000"
                }} key={props.cards.indexOf(card)}>
                    <img id="img" src={card.picture} />
                    <div className="container">
                        <h3>Name: {card.name}</h3>
                        <div>
                            <h4>Job: {card.job}</h4>
                            <h4>Contact: {card.contact}</h4>
                            <h4>Adress: {card.adress}</h4>
                        </div>
                    </div>
                </div>
            )}
        </>

    )

}

export default Home
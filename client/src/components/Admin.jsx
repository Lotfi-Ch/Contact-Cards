import axios from "axios";
import React from "react";
import { Card } from 'react-bootstrap';

import "./style.css"


const Admin = ({ cards, handleDelete, changeView }) => {

    return (
        <div>
            {cards && cards.map((card) =>
                <div class="card" style={{
                    color: "#000"
                }} key={cards.indexOf(card)}>
                    <img id="img" src={card.picture} />
                    <div className="container">
                        <h3>Name: {card.name}</h3>
                        <div>
                            <h4>Job: {card.job}</h4>
                            <h4>Contact: {card.contact}</h4>
                            <h4>Address: {card.adress}</h4>
                            <h4>Recommandations: {card.recommandations}</h4>
                        </div>
                        <button id="deletebtn" type="button" onClick={() => handleDelete(card)}> delete </button>
                    </div>
                </div>
            )}
        </div>

    )

}

export default Admin;
import axios from "axios";
import React from "react";
import { Card } from 'react-bootstrap';


const Admin = ({ cards, handleDelete, changeView }) => {





    return (
        <>
            {cards && cards.map((card, i) =>
            (<Card className="Card" style={{
                color: "#000"
            }} key={i}>

                <Card.Title>{card.name}</Card.Title>
                <Card.Body style={{
                    backgroundcolor: "gray"
                }}>
                    <Card.Text>{card.job}</Card.Text>
                    <Card.Text>{card.contact}</Card.Text>
                    <Card.Text>{card.adress}</Card.Text>
                </Card.Body>
                <Card.Img src={card.picture} />
                <button type="button" onClick={() => handleDelete(card)}> delete </button>
            </Card>)
            )
            }
        </>

    )

}

export default Admin;
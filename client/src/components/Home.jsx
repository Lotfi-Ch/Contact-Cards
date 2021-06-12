
import { Card } from 'react-bootstrap';



import React from 'react'

const Home = (props) => {


    return (
        <>
            {props.cards && props.cards.map((card) =>
                <Card className="Card" style={{
                    color: "#000"
                }} key={props.cards.indexOf(card)}>

                    <Card.Title>{card.name}</Card.Title>
                    <Card.Body style={{
                        backgroundcolor: "gray"
                    }}>
                        <Card.Text>{card.job}</Card.Text>
                        <Card.Text>{card.contact}</Card.Text>
                        <Card.Text>{card.adress}</Card.Text>
                    </Card.Body>
                    <Card.Img src={card.picture} />
                </Card>
            )
            }
        </>

    )

}

export default Home
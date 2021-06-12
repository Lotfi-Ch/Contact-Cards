import React from 'react'
import { Card } from 'react-bootstrap';

let match = (array, val) => {
    let result = []
    array.forEach(element => {
        if (element.job.toUpperCase() === val.toUpperCase()) {
            result.push(element)
        }
    });
    return result
}


const Search = (props) => {
    return (
        <div>{match(props.data, props.input).map((card) =>
            <Card className="Card" style={{
                color: "#000"
            }} key={props.data.indexOf(card)}>

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
        )}</div>


    )
}



export default Search;
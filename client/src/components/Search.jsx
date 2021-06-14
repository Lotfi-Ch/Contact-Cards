import React from 'react'
import { Card } from 'react-bootstrap';
import "./style.css"

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
        <div>

            {match(props.data, props.input).map((card) =>
                <div className="card" style={{
                    color: "#000"
                }} key={props.data.indexOf(card)}>
                    <img id="img" src={card.picture} />
                    <div className="container">
                        <h3>Name: {card.name}</h3>
                        <div>
                            {console.log(props.input)}
                            <h4>Job: {card.job}</h4>
                            <h4>Contact: {card.contact}</h4>
                            <h4>Address: {card.adress}</h4>
                            <h4>Recommandations: {card.recommandations}</h4>
                        </div>
                    </div>
                </div>
            )
            }
        </div >


    )
}



export default Search;
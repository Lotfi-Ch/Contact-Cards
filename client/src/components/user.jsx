import "./style.css"
import axios from "axios"

import React from 'react'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            current: this.props.current,
            newContact: null,
            newAdress: null

        }
        this.handleChange = this.handleChange.bind(this)
        this.modifycontact = this.modifycontact.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.newContact)
    }

    modifycontact(id, val) {
        axios.patch(`/modify/contact/${id}`, { contact: val }).then(result =>
            console.log("number changed!")).catch(err => console.error(err));
    }
    modifyadress(id, val) {
        axios.patch(`/modify/adress/${id}`, { adress: val }).then(result =>
            console.log("adress changed!")).catch(err => console.error(err));
    }
    render() {
        return (
            <><div className="card" style={{ color: "#000" }} >
                <img id="img" src={this.state.current.picture} />
                <div className="container">
                    <h3>Name: {this.state.current.name}</h3>
                    <div>
                        <h4>Job: {this.state.current.job}</h4>
                        <h4>Contact: {this.state.current.contact}</h4>
                        <div> You may change your contact number here! </div>
                        <button id="changebtn" onClick={() => {
                            this.modifycontact(this.state.current._id, this.state.newContact)
                            alert("you changed your contact number!")
                        }}> Submit </button>
                        <input name="newContact" onChange={this.handleChange} />
                        <h4>Address: {this.state.current.adress}</h4>
                        <div> You may change your address here! </div>
                        <button id="changebtn" onClick={() => {
                            this.modifyadress(this.state.current._id, this.state.newAdress)
                            alert("You changed your adress!")
                        }}> Submit </button>
                        <input name="newAdress" onChange={this.handleChange} />
                        <h4>You have {this.state.current.recommandations} recommendations </h4>
                    </div>
                </div>
            </div>
            </>

        )
    }

}

export default User
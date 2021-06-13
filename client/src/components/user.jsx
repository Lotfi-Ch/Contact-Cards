import "./style.css"
import axios from "axios"

import React from 'react'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            current: this.props.current,
            newContact: null

        }
        this.handleChange = this.handleChange.bind(this)
        this.modify = this.modify.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.newContact)
    }

    modify(id, val) {
        axios.patch(`/modify/${id}`, { contact: val }).then(result =>
            console.log("number changed!")).catch(err => console.error(err));
    }





    render() {
        return (
            <><div class="card" style={{ color: "#000" }} >
                <img id="img" src={this.state.current.picture} />
                <div className="container">
                    <h3>Name: {this.state.current.name}</h3>
                    <div>
                        <h4>Job: {this.state.current.job}</h4>
                        <h4>Contact: {this.state.current.contact}</h4>
                        <div> You may change your contact number! </div>
                        <button onClick={() => {
                            this.modify(this.state.current._id, this.state.newContact)
                            alert("value changed !")
                        }}> Submit </button>
                        <input name="newContact" onChange={this.handleChange} />
                        <h4>Adress: {this.state.current.adress}</h4>
                        <h4>Recommandations: {this.state.current.recommandations}</h4>
                    </div>
                </div>
            </div>
            </>

        )
    }

}

export default User
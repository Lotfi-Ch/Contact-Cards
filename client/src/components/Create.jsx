
import axios from "axios";
import React from "react";

import "./style.css"




class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            job: null,
            adress: null,
            number: null,
            picture: null,
            admin: this.props.admin,
            create: this.props.create,
            search: this.props.search,
            home: this.props.home
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeView = this.changeView.bind(this)
        this.post = this.post.bind(this)
    }

    handleChange(e) {
        console.log(e) // change this {e.name}
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.name)
        console.log(this.state.job)
        console.log(this.state.adress)
        console.log(this.state.picture)
    }

    changeView() {
        this.setState({
            home: true,
            search: false,
            admin: false,
            create: false
        }, () => console.log("helloo", this.state.home))
    }
    post() {
        axios.post('/create', {
            name: this.state.name,
            job: this.state.job,
            adress: this.state.adress,
            contact: this.state.contact,
            picture: this.state.picture,
            recommandations: 0
        }).then(result => this.changeView())
    }
    render() {

        return (
            <>
                < div id="card" >
                    <div class="name" > Create your business card here!  </div >


                    <div class="name"> Full Name </ div>
                    <input class="input" placeholder="Enter your name" name="name" onChange={this.handleChange} />
                    <div class="name"> Job </div>
                    <input class="input" placeholder="What is your job" name="job" onChange={this.handleChange} />
                    <div class="name"> Adress </div>
                    <input class="input" placeholder="Adress" name="adress" onChange={this.handleChange} />
                    <div class="name"> Phone number </div>
                    <input class="input" placeholder="Phone number" name="number" onChange={this.handleChange} />
                    <div class="name"> Upload picture </div>
                    <input class="input" placeholder="Upload your picture" name="picture" onChange={this.handleChange} />
                    <button id="btn" onClick={() => { //here
                        console.log("name here", this.state.name)
                        if (this.state.name === null || this.state.job === null || this.state.adress === null || this.state.number === null) {
                            alert("Please complete all required fields")

                        }
                        else {
                            this.post()
                            alert("Your business card is created")
                        }
                    }}>Submit</button>


                </div>

            </>
        )



    }
}



export default Create;
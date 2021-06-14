
import axios from "axios";
import React from "react";

import "./style.css"




class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            name: null,
            job: null,
            adress: null,
            contact: null,
            picture: null,
            email: null,
            password: null,
            admin: this.props.admin,
            create: this.props.create,
            search: this.props.search,
            home: this.props.home
        }
        this.handleChange = this.handleChange.bind(this)
        this.post = this.post.bind(this)
        this.uniquePassword = this.uniquePassword.bind(this)
    }

    handleChange(e) {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value })
    }

    post() {
        axios.post('/create', {
            name: this.state.name,
            job: this.state.job,
            adress: this.state.adress,
            contact: this.state.contact,
            picture: this.state.picture,
            recommandations: 0,
            email: this.state.email,
            password: this.state.password
        }).then(result => this.changeView("home"))
    }

    uniquePassword(password) {
        var test = false;
        this.state.data.map((element) => {

            if (element.password === password) {
                test = true
            }
        });
        return test
    }

    render() {

        return (
            <>
                < div id="card" >
                    <div className="name" > Create your business card here!  </div >


                    <div className="name"> Full Name </ div>
                    <input className="input" placeholder="Enter your name" name="name" onChange={this.handleChange} />
                    <div className="name"> Job </div>
                    <input className="input" placeholder="What is your job" name="job" onChange={this.handleChange} />
                    <div className="name"> Address </div>
                    <input className="input" placeholder="Address" name="adress" onChange={this.handleChange} />
                    <div className="name"> Phone number </div>
                    <input className="input" placeholder="Phone number" name="contact" onChange={this.handleChange} />
                    <div className="name"> E-mail </div>
                    <input className="input" placeholder="example@example.com" name="email" onChange={this.handleChange} />
                    <div className="name"> Password</div>
                    <input className="input" placeholder="Password" type="password" name="password" onChange={this.handleChange} />
                    <div className="name"> Upload picture </div>
                    <input className="input" placeholder="Upload your picture" name="picture" onChange={this.handleChange} />
                    <div className="name"> Submit once you finish all fields! 😁 </div>



                </div>
                <button id="btn" onClick={() => {
                    console.log(this.state.password);
                    var test = this.uniquePassword(this.state.password)
                    console.log(test);
                    if (test) {
                        alert("Password used! please choose another password 😄")

                    }
                    else if (this.state.name === null ||
                        this.state.job === null ||
                        this.state.adress === null ||
                        this.state.contact === null ||
                        this.state.password === null ||
                        this.state.email === null) {
                        alert("Please complete all required fields")

                    } else {
                        this.post()
                        alert("Your business card is created")
                        document.location.reload(true)

                    }
                }}>Submit</button>
            </>
        )



    }
}



export default Create;
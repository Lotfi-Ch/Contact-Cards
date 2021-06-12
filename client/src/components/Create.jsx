
import axios from "axios";
import React from "react";



let post = () => {
    axios.post('/create', {
        name: this.state.name,
        job: this.state.job,
        adress: this.state.adress,
        contact: this.state.contact,
        picture: this.state.picture
    }).then(result => console.log("axios request", result))
}



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
        this.setState({ home: true })
        this.setState({ search: false })
        this.setState({ home: false })
        this.setState({ search: false })
    }
    post() {
        axios.post('/create', {
            name: this.state.name,
            job: this.state.job,
            adress: this.state.adress,
            contact: this.state.contact,
            picture: this.state.picture
        }).then(result => console.log("axios request", result))
    }
    render() {

        return (
            <div>
                <input placeholder="Enter your name" name="name" onChange={this.handleChange} />
                <input placeholder="What is your job" name="job" onChange={this.handleChange} />
                <input placeholder="Adress" name="adress" onChange={this.handleChange} />
                <input placeholder="Phone number" name="number" onChange={this.handleChange} />
                <input placeholder="Upload your picture" name="picture" onChange={this.handleChange} />
                <button onClick={() => {
                    this.changeView()
                    this.post()

                }}>Submit</button>
            </div>
        )



    }
}



export default Create;
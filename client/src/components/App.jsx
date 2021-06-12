import React from "react";

import axios from "axios";
import $ from "jquery";
import { Button, Container, Form, Navbar, NavDropdown, Nav, FormControl } from 'react-bootstrap';

import Home from "./Home.jsx";
import Search from "./Search.jsx";
import Create from "./Create.jsx";
import Admin from "./Admin.jsx";
// import 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            input: null,
            home: true,
            search: false,
            create: false,
            admin: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeView = this.changeView.bind(this)
    }

    componentDidMount() {
        $.ajax({
            url: '/Cards',
            type: 'get',
            success: (response) => {
                this.setState({ data: response })
                console.log("data hereeeee", response)
            }
        })
    }

    handleChange(e) {
        this.setState({ input: e.target.value })
    }
    changeView(val) {
        if (val === "search") {
            this.setState({ home: false })
            this.setState({ search: true })
            this.setState({ create: false })
            this.setState({ admin: false })
        } else if (val === "home") {
            this.setState({ home: true })
            this.setState({ search: false })
            this.setState({ create: false })
            this.setState({ admin: false })
        } else if (val === "create") {
            this.setState({ home: false })
            this.setState({ search: false })
            this.setState({ create: true })
            this.setState({ admin: false })
        } else if (val === "admin") {
            this.setState({ home: false })
            this.setState({ search: false })
            this.setState({ create: false })
            this.setState({ admin: true })
        }

    }


    render() {

        return (



            <Container>
                <div> Where everything can be found</div>
                <Button onClick={() => { if (this.state.input !== null) { return this.changeView("search") } }}> Search</Button>
                <Button type="button" className="btn btn-secondary">Secondary</Button>
                <Button onClick={() => { if (this.state.input !== null) { return this.changeView("home") } }}> Home</Button>
                <Button onClick={() => { return this.changeView("create") }}>create</Button>
                <Button onClick={() => { return this.changeView("admin") }}>Admin</Button>

                <input placeholder="what are you searching" onChange={this.handleChange} />
                {console.log(this.state)}
                <Form>
                    {this.state.home && <Home cards={this.state.data} />}
                    {this.state.search && <Search data={this.state.data} input={this.state.input} />}
                    {this.state.create && <Create home={this.state.home} search={this.state.search} create={this.state.create} admin={this.state.admin} />}
                    {this.state.search && <Admin data={this.state.data} input={this.state.input} />}
                </Form>
            </Container>
        )
    }

}


export default App;





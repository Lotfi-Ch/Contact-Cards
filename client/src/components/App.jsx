import React from "react";

import axios from "axios";
import $ from "jquery";
import { Button, Container, Form, Navbar, NavDropdown, Nav, FormControl } from 'react-bootstrap';

import Home from "./Home.jsx";
import Search from "./Search.jsx";
import Create from "./Create.jsx";
import Admin from "./Admin.jsx";




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

    remove(card) {
        axios.delete(`/delete/${card.name}`)
            .then(() => {
                this.setState({
                    data: this.state.data.filter((datum) => datum.name !== card.name)
                })
            })
    }


    handleChange(e) {
        this.setState({ input: e.target.value })
    }
    changeView(val) {
        if (val === "search") {
            this.setState({ home: false, search: true, create: false, admin: false })
        } else if (val === "home") {
            this.setState({ home: true, search: false, create: false, admin: false })
        } else if (val === "create") {
            this.setState({
                home: false,
                search: false,
                create: true,
                admin: false
            })
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

                <Button onClick={() => { return this.changeView("home") }}> Home</Button>
                <Button onClick={() => { return this.changeView("create") }}>create</Button>
                <Button onClick={() => { return this.changeView("admin") }}>Admin</Button>

                <input placeholder="what are you searching" onChange={this.handleChange} />
                {console.log(this.state)}
                <Form>
                    {this.state.home && <Home cards={this.state.data} />}
                    {this.state.search && <Search data={this.state.data} input={this.state.input} />}
                    {this.state.create && <Create home={this.state.home} search={this.state.search} create={this.state.create} admin={this.state.admin} />}
                    {this.state.admin && <Admin cards={this.state.data} changeView={this.changeView} handleDelete={this.remove.bind(this)} />}
                </Form>
            </Container>
        )
    }

}


export default App;




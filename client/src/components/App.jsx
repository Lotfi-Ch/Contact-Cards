import React from "react";
import axios from "axios";
import $ from "jquery";

import Home from "./Home.jsx";
import Search from "./Search.jsx";
import Create from "./Create.jsx";
import Admin from "./Admin.jsx";
import Preview from "./Preview.jsx"
import Login from "./login.jsx"
import User from "./user.jsx"

import "./style.css"




class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            input: null,
            home: true,
            search: false,
            create: false,
            admin: false,
            preview: false,
            login: false,
            current: null,
            email: null,
            password: null,
            user: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeView = this.changeView.bind(this)
        this.changeCurrent = this.changeCurrent.bind(this)
        this.recommandations = this.recommandations.bind(this)
    }

    componentDidMount() {
        $.ajax({
            url: '/Cards',
            type: 'get',
            success: (response) => {
                this.setState({ data: response })
            }
        })
    }

    changeCurrent(val) {
        this.setState({ current: val })
    }

    recommandations(value, choice) {
        axios.patch(`/create/${choice}/${value}`)
            .then(result => {
                console.log("Changed!")
            })
            .catch(err => console.error(err))
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
        this.setState({ [e.target.name]: e.target.value })
    }

    changeView(val) {
        console.log(val);
        if (val === "search") {
            this.setState({ home: false, search: true, create: false, admin: false })
        } else if (val === "home") {
            this.setState({
                home: true,
                search: false,
                create: false,
                admin: false,
                preview: false,
                login: false,
                user: false
            })
        } else if (val === "create") {
            this.setState({
                home: false,
                search: false,
                create: true,
                admin: false,
                preview: false,
                login: false,
                user: false
            })
        } else if (val === "admin") {
            this.setState({
                home: false,
                search: false,
                create: false,
                admin: true,
                preview: false,
                login: false,
                user: false
            })
        } else if (val === "preview") {
            this.setState({
                home: false,
                search: false,
                create: false,
                admin: false,
                preview: true,
                login: false,
                user: false
            })
        } else if (val === "login") {
            this.setState({
                home: false,
                search: false,
                create: false,
                admin: false,
                preview: false,
                login: true,
                user: false
            })
        } else if (val === "user") {
            this.setState({
                home: false,
                search: false,
                create: false,
                admin: false,
                preview: false,
                login: false,
                user: true
            })
        }
        else if (val === "reload") {
            this.setState({
                home: false,
                search: false,
                admin: false,
                create: true
            })
        }


    }




    render() {

        return (



            <div id="home">

                <div className="topnav">

                    <a onClick={() => { window.location.reload() }} className="active"> Home</a>
                    <a onClick={() => { return this.changeView("create") }}>create</a>
                    <a onClick={() => { return this.changeView("login") }}>Login</a>


                    <div className="search-container">
                        <div>
                            <input type="text" placeholder="Who do you need?" name="input" onChange={this.handleChange} />
                            <button type="submit" onClick={() => { if (this.state.input !== null) { return this.changeView("search") } }}> Search </button>
                        </div>
                    </div>

                </div>

                <div>
                    {this.state.home && <Home view={this.changeView} change={this.changeCurrent} current={this.state.current} cards={this.state.data} />}
                    {this.state.search && <Search data={this.state.data} input={this.state.input} />}
                    {this.state.preview && <Preview current={this.state.current} recommandations={this.recommandations} />}
                    {this.state.admin && <Admin cards={this.state.data} changeView={this.changeView} handleDelete={this.remove.bind(this)} />}
                    {this.state.login && <Login data={this.state.data} email={this.state.email} password={this.state.password} handleChange={this.handleChange} changeView={this.changeView} changeCurrent={this.changeCurrent} />}
                    {this.state.user && <User current={this.state.current} data={this.state.data} />}
                </div>
                <div id="createBC">{this.state.create && <Create data={this.state.data} home={this.state.home} search={this.state.search} create={this.state.create} admin={this.state.admin} change={this.changeView} />}</div>
            </div >
        )
    }

}


export default App;





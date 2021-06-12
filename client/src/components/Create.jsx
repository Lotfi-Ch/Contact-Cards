import React from "react";

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
    }

    handleChange(e) {  // change this {e.name}
        this.setState({ input: e.target.value })
    }

    changeView() {
        this.setState({ home: true })
        this.setState({ search: false })
        this.setState({ home: false })
        this.setState({ search: false })
    }
    render() {

        return (
            <div>
                <input placeholder="Enter your name" />
                <input placeholder="What is your job" />
                <input placeholder="Adress" />
                <input placeholder="Phone number" />
                <input placeholder="Upload your picture" />
                <button onClick={this.changeView}>Submit</button>
            </div>
        )



    }
}



export default Create;
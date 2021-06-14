import "./loginstyle.css"

import React from 'react'

const Login = (props) => {


    return (

        <body>
            <div className="signin">
                <div className="back-img">
                    <div className="sign-in-text">
                        <h2 className="active">Sign In</h2>
                    </div>
                    <div className="layer">
                    </div>
                </div>
                <div className="form-section">

                    <form action="#">

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="email" id="sample3" name="email" onChange={props.handleChange} />
                            {console.log(props.email)}
                            {console.log(props.password)}
                            <label className="mdl-textfield__label" id="email" for="sample3">Email</label>
                            <span className="mdl-textfield__error"></span>
                        </div>
                        <br />
                        <br />

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input pattern=".{8,}" className="mdl-textfield__input" type="password" name="password" id="sample3" onChange={props.handleChange} />
                            <label className="mdl-textfield__label" for="sample3" id="email" >Password</label>
                            <span className="mdl-textfield__error"></span>
                        </div>
                        <br />


                        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
                            <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                            <span className="keep-text mdl-checkbox__label">Keep me Signed In</span>
                        </label>
                    </form>
                </div>

                <button onClick={() => {
                    if (props.email === "lotfichakchouk1@gmail.com" && props.password === "lotfi") {
                        props.changeView("admin")
                    } else {
                        props.data.map((data) => {
                            if (data.password === props.password && data.email === props.email) {
                                props.changeView("user")
                                props.changeCurrent(data)
                            }
                        })
                    }
                }} className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
                    Sign In
                </button>
            </div>
        </body>

    )

}

export default Login
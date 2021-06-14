import "./loginstyle.css"

import React from 'react'

const Login = (props) => {


    return (

        <body>
            <div class="signin">
                <div class="back-img">
                    <div class="sign-in-text">
                        <h2 class="active">Sign In</h2>
                    </div>
                    <div class="layer">
                    </div>
                </div>
                <div class="form-section">

                    <form action="#">

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="email" id="sample3" name="email" onChange={props.handleChange} />
                            {console.log(props.email)}
                            {console.log(props.password)}
                            <label class="mdl-textfield__label" for="sample3">Email</label>
                            <span class="mdl-textfield__error"></span>
                        </div>
                        <br />
                        <br />

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input pattern=".{8,}" class="mdl-textfield__input" type="password" name="password" id="sample3" onChange={props.handleChange} />
                            <label class="mdl-textfield__label" for="sample3">Password</label>
                            <span class="mdl-textfield__error"></span>
                        </div>
                        <br />


                        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
                            <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked />
                            <span class="keep-text mdl-checkbox__label">Keep me Signed In</span>
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
                }} class="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
                    Sign In
                </button>
            </div>
        </body>

    )

}

export default Login
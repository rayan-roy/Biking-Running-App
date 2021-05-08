import React from 'react'

function LoginComponent() {
    return (
        <div className = 'login-container'>
            <h1>Welcome to</h1>
            <h1>Running/ Biking App</h1>
            <div class = "login-form">
                <div class = "username-input">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div class = "sign-up-button">
                    <button type="button" class="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent

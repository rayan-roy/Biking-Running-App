import React from 'react'
import './LoginComponent.css'

function LoginComponent() {
    return (
        <div className = 'login-container'>
            <h1>Welcome to</h1>
            <h1>Running/ Biking App</h1>
            <div class = "login-form">
                <div class = "username-input">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div class = "start-session-button">
                <a class="btn btn-primary" href="/session" role="button">Start a Session</a>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent

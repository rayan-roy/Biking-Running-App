import React from 'react'
import './LoginComponent.css'
import Running from './Running.jpg'

function LoginComponent() {
    return (
        <div class="container">
            <img class="col-6" src={Running} />
            <div class="col-6 login-container">
                <h2 style={{ textTransform: "uppercase", letterSpacing: 5 }}>Welcome to</h2>
                <h1 style={{ fontSize: "5rem" }}>CoRunna</h1>
                <div class="login-form">
                    <div class="username-input">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Please enter an username" aria-label="Username" aria-describedby="basic-addon1" onChange={(event) => localStorage.setItem("Username", event.target.value)} />
                        </div>
                    </div>
                    <div class="start-session-button">
                        <a class="btn btn-primary btn-lg purple-background no-outline" href="/session" role="button">Start a Session</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent

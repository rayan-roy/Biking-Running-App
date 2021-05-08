import React from 'react'
import './SessionComponent.css'

function SessionComponent() {
    return (
        <div class = 'session-container'>
            <h1>Session - DAVID</h1>
            <div class = "distance-input">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Distance: " aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
            </div>
        </div>
    )
}

export default SessionComponent

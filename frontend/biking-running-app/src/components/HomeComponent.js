import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function HomeComponent() {

    return (
        <div class = "home-container">
            <h1>Welcome NAME</h1>
            <div class = "calendar">
                <div>
                <Calendar/>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent

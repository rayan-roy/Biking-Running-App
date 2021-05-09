import React from 'react';

import './SessionComponent.css';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
/* global google */

function Map() {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.651070, lng: -79.347015 }} />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class SessionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.autocomplete = null
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
    }

    render() {
        return (
            <>
                <div class='session-container'>
                    <h1 style={{ fontSize: '5rem' }}>Session - {localStorage.getItem("Username")}</h1>
                    <div class="location-input">
                        <div class="input-group mb-3">
                            <input id="autocomplete" type="text" class="form-control" placeholder="Location: " aria-label="Location: " aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div class='session-container-2'>
                    <div class='map'>
                        <WrappedMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                            loadingElement={<div style={{ height: "100%" }} />}
                            containerElement={<div style={{ height: "100%" }} />}
                            mapElement={<div style={{ height: "100%" }} />}
                        />
                    </div>
                    <div class="card-container">
                        <div class="card">
                            <div class="card-body">
                                <i class="fas fa-exclamation-circle" />
                                Alert: Congestion at Yonge and Finch
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <i class="fas fa-exclamation-circle" />
                                Alert: Large crowds at Leslie and Finch
                    </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <i class="fas fa-running" />
                                2 Runners may be on a similar route
                    </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <i class="fas fa-cloud-rain" />
                                Expect a slight chance of rain at 7 pm
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SessionComponent

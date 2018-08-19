import React from 'react';

const Weather = props => (
    <div>
        { props.data.city && props.data.country && <p>Location: {props.data.city}, {props.data.country}</p> }
        { props.data.temperature && <p>Temperature: {props.data.temperature}</p> }
        { props.data.humidity && <p>humidity: {props.data.humidity}</p>}
        { props.data.description && <p>Conditions: {props.data.description}</p> }
        { props.data.error && <p>{props.data.error}</p> }
    </div>
);

export default Weather;
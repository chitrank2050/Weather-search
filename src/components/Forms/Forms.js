import React from 'react';

class Forms extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get weather</button>
            </form>
        );
    }
};

export default Forms;
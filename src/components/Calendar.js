import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Cal extends Component {
    // const { date, setDate } = props;

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default Cal;

import React, {Component} from 'react';
import Calendar from '../Calendar';
//import moment from 'moment';

export default class Lunar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            next: 0,
            prev: 0,
            startDate: 0
        });
    }

    next(type) {
        let next = this.state.next;
        let prev = this.state.prev;

        if (type === 'next') {
            next++;
        }

        if (type === 'prev') {
            prev++;
        }

        this.setState({
            next,
            prev
        });
    }

    selectStart(startDate, startMonth) {
        this.setState({
            startDate: startDate + '-' + startMonth
        });
    }

    render() {
        const numbOfCalendars = 2;
        let calendars = [];
        for (let i = 1; i <= numbOfCalendars; i++) {
             calendars.push(<Calendar {...this.state} selectStart={this.selectStart.bind(this)} cal={i} key={i}/>);
        }
        return (
            <div>
                <button onClick={this.next.bind(this, 'prev')}> &lt; </button>
                {calendars}
                <button onClick={this.next.bind(this, 'next')}> &gt; </button>
            </div>
        );
    }
}

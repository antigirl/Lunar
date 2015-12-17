import React, {Component} from 'react';
import Calendar from '../Calendar';
import moment from 'moment';

export default class Lunar extends Component {
    constructor(props) {
        super(props);

        const today = moment(new Date());
        const month = today.format('MMM');
        const year = today.format('YYYY');
        this.weekDays = moment.weekdaysShort();

        this.dates = {
            daysInMonth: today.daysInMonth(),
            startDay: moment(new Date().setDate(1)).day(),
            month,
            year
        };
    }

    componentWillMount() {
        this.setState(this.dates);
    }

    render() {
        return (
            <div>
                <Calendar {...this.state} weekDays={this.weekDays}/>
                <Calendar {...this.state} weekDays={this.weekDays}/>
            </div>
        );
    }
}
// <Calendar {...this.state}/>
// <Calendar {...this.state} secondCal={true}/>
// <button onClick={this.nextD.bind(this)}>Next</button>

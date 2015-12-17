import React, {Component} from 'react';
import Title from '../Title';
import DaysTitle from '../DaysTitle';
import Days from '../Days';
import moment from 'moment';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.month = props.month;
        this.year = props.year;

        if (props.secondCal) {
            let getNextMonth = moment([props.year, parseInt(props.month, 10) -1]).add(1, 'months');
            let nextMonth = getNextMonth.format('D-M-YYYY').split('-');
            this.month = nextMonth[1];
            this.year = nextMonth[2];
        }

        this.daysInMonth = moment(this.year + '-' + this.month, 'YYYY-M').daysInMonth();
        this.startDay = moment(this.year + '-' +  moment().format('MM') + '-' + '01').day();
    }
    
    render() {
        return (
            <table>
                <thead>
                    <Title month={this.month} year={this.year}/>
                    <DaysTitle />
                </thead>
                <Days daysInMonth={this.daysInMonth} startDay={this.startDay}/>
            </table>
        );
    }
}

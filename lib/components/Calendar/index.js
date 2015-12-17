import React, {Component} from 'react';
import Title from '../Title';
import DaysTitle from '../DaysTitle';
import Days from '../Days';
import moment from 'moment';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.setCalendar();
    }

    setCalendar(next, prev) {
        let calNumber = this.props.cal - 1;

        if (next) {
            calNumber = calNumber + next;
        }

        if (prev) {
            calNumber = calNumber - prev;
        }

        const today = moment(new Date()).add(calNumber, 'M');
        this.month = today.format('MMM');
        this.year = today.format('YYYY');
        this.weekDays = moment.weekdaysShort();
        this.daysInMonth = today.daysInMonth();
        this.startDay = moment(new Date().setDate(1)).add(calNumber, 'M').day();
    }

    componentWillReceiveProps(nextProps) {
        this.setCalendar(nextProps.next, nextProps.prev);
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <table>
                <thead>
                    <Title month={this.month} year={this.year}/>
                    <DaysTitle week={this.weekDays}/>
                </thead>
                    <Days daysInMonth={this.daysInMonth} selectStart={this.props.selectStart} startDate={this.props.startDate} startDay={this.startDay}/>
            </table>
        );
    }
}

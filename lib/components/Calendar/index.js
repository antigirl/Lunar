import React, {Component} from 'react';
import Title from '../Title';
import DaysTitle from '../DaysTitle';
import Days from '../Days';
import moment from 'moment';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        // if (props.secondCal) {
        //     let getNextMonth = moment([props.year, parseInt(props.month, 10) -1]).add(1, 'months');
        //     let nextMonth = getNextMonth.format('D-M-YYYY').split('-');
        //     this.month = nextMonth[1];
        //     this.year = nextMonth[2];
        // }
    }

    render() {
        return (
            <table>
                <thead>
                    <Title month={this.props.month} year={this.props.year}/>
                    <DaysTitle week={this.props.weekDays}/>
                </thead>
                    <Days daysInMonth={this.props.daysInMonth} startDay={this.props.startDay}/>
            </table>
        );
    }
}

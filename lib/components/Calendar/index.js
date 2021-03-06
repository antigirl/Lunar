import React, {Component, PropTypes} from 'react';
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
        this.actualDate = moment(today._i).format('D MMM YYYY');
        this.day = today.format('D');
        this.month = today.format('MMM');
        this.year = today.format('YYYY');
        this.weekDays = moment.weekdaysShort();
        this.daysInMonth = today.daysInMonth();
        this.startDay = moment(new Date().setDate(1)).add(calNumber, 'M').day();
    }

    componentWillReceiveProps(nextProps) {
        this.setCalendar(nextProps.next, nextProps.prev);
    }

    selectStartEndCal(theDate) {
        if (!this.props.startDate && !this.props.endDate) {
            this.props.selectStart(theDate, this.month, this.year);
        } else if (this.props.startDate && !this.props.endDate) {
            if (moment(theDate + '-' + this.month + '-' + this.year).isBefore(this.props.startDate)) {
                return this.props.selectStart(theDate, this.month, this.year);
            }
            this.props.selectEnd(theDate, this.month, this.year);
        } else if (this.props.startDate && this.props.endDate) {
            this.props.selectStart(theDate, this.month, this.year);
            this.props.selectEnd(0, 0, 0);
        }
    }

    selectHoverDate(theDate) {
        this.props.setHover(theDate, this.month, this.year);
    }

    isBetween(firstDate, theEndDate, hoverSelect) {
        if (hoverSelect) {
            if (this.props.startDate && !this.props.endDate) {
                const newDate = this.month + ' ' + firstDate + ' ' + this.year;
                return moment(new Date(newDate)).isBetween(this.props.startDate, theEndDate);
            }
        } else {
            if (this.props.startDate && this.props.endDate) {
                const newDate = this.month + ' ' + firstDate + ' ' + this.year;
                return moment(new Date(newDate)).isBetween(this.props.startDate, theEndDate);
            }
        }
    }

    isBefore(theDate) {
        const newDate = theDate + ' ' + this.month + ' ' + this.year;
        return moment(new Date(newDate)).isBefore(this.actualDate);
    }

    isAfter(theDate) {
        if (this.props.startDate && !this.props.endDate) {
            const newDate = theDate + ' ' + this.month + ' ' + this.year;
            const startDate = this.props.startDate.replace(/-/g, ' ');
            const advanceDate = moment(new Date(startDate)).add(17, 'd');
            return moment(new Date(newDate)).isAfter(advanceDate);
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <Title month={this.month} year={this.year}/>
                    <DaysTitle week={this.weekDays}/>
                </thead>
                    <Days daysInMonth={this.daysInMonth} day={this.day} month={this.month} startDay={this.startDay} isBefore={this.isBefore.bind(this)} isAfter={this.isAfter.bind(this)} isBetween={this.isBetween.bind(this)} selectHoverDate={this.selectHoverDate.bind(this)} selectStartEndCal={this.selectStartEndCal.bind(this)} startDate={this.props.startDate} endDate={this.props.endDate} hoverDate={this.props.hoverDate}/>
            </table>
        );
    }
}

Calendar.propTypes = {
    cal: PropTypes.number.isRequired,
    startDate: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    endDate: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    hoverDate: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    selectStart: PropTypes.func.isRequired,
    selectEnd: PropTypes.func.isRequired,
    setHover: PropTypes.func.isRequired,
};

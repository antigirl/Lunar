import React, {Component, PropTypes} from 'react';
import classNames from 'classNames';

export default class Days extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    selectStartEnd(theDate) {
        this.props.selectStartEndCal(theDate);
    }


    selectHover(theDate) {
        this.props.selectHoverDate(theDate);
    }

    render() {
        this.weeks = [[], [], [], [], [], []];
        let weekArray = 0;

        let daysInMonth = this.props.daysInMonth;
        for (let i = 1; i <= daysInMonth; i++) {
            if (i <= this.props.startDay) {
                this.weeks[weekArray][i - 1] = null;
                daysInMonth++;
            } else {
                this.weeks[weekArray][i - 1] = i - this.props.startDay;
            }

            if (i % 7 === 0) {
                weekArray += 1;
            }
        }

        const startDateProp = this.props.startDate;
        let startDate = 0;
        let startMonth;
        if (startDateProp) {
            let startDateSplit = startDateProp.split('-');
            startDate = parseInt(startDateSplit[0]);
            startMonth = startDateSplit[1];
        }

        const endDateProp = this.props.endDate;
        let endDate = 0;
        let endMonth;
        if (endDateProp) {
            let endDateSplit = endDateProp.split('-');
            endDate = parseInt(endDateSplit[0]);
            endMonth = endDateSplit[1];
        }

        const hoverDateProp = this.props.hoverDate;
        let hoverDate = 0;
        let hoverMonth;
        if (hoverDateProp) {
            let hoverDateSplit = hoverDateProp.split('-');
            hoverDate = parseInt(hoverDateSplit[0]);
            hoverMonth = hoverDateSplit[1];
        }

        return (<tbody>
            {this.weeks.map((innerWeek, i) => {
                return (<tr key={i}>
                    {innerWeek.map((days, j) => {
                        var calClass = classNames({
                            'staleDay': this.props.isBefore(days) || this.props.isAfter(days),
                            'startHover': this.props.isBetween(days, this.props.hoverDate, true),
                            'hoverable': days === hoverDate && this.props.month === hoverMonth,
                            'startSelected': days === startDate && this.props.month === startMonth,
                            'endSelected': days === endDate && this.props.month === endMonth,
                            'midSelected': startDate && endDate && days != null && this.props.isBetween(days, this.props.endDate)
                        });
                        if (calClass === 'staleDay') {
                            return <td key={j} className={calClass} >{days}</td>;
                        }
                        return <td key={j} className={calClass} onMouseOver={this.selectHover.bind(this, days)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                    })}
                </tr>);
            })}
            </tbody>
        );
    }

}

Days.propTypes = {
    daysInMonth: PropTypes.number.isRequired
};

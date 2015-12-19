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

        const startDate = this.props.startDate ? this.props.startDate.split('-') : [0, 0];
        const endDate = this.props.endDate ? this.props.endDate.split('-') : [0, 0];
        const hoverDate = this.props.hoverDate ? this.props.hoverDate.split('-') : [0, 0];

        return (<tbody>
            {this.weeks.map((innerWeek, i) => {
                return (<tr key={i}>
                    {innerWeek.map((days, j) => {
                        const calClass = classNames({
                            'staleDay': this.props.isBefore(days) || this.props.isAfter(days),
                            'startHover': this.props.isBetween(days, this.props.hoverDate, true),
                            'hoverable': days === parseInt(hoverDate[0], 10) && this.props.month === hoverDate[1],
                            'startSelected': days === parseInt(startDate[0], 10) && this.props.month === startDate[1],
                            'endSelected': days === parseInt(endDate[0], 10) && this.props.month === endDate[1],
                            'midSelected': startDate[0] && endDate[0] && days !== null && this.props.isBetween(days, this.props.endDate)
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
    startDay: PropTypes.string.isRequired,
    daysInMonth: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    hoverDate: PropTypes.string.isRequired,
    selectStartEndCal: PropTypes.function.isRequired,
    selectHoverDate: PropTypes.function.isRequired,
    isBefore: PropTypes.function.isRequired,
    isAfter: PropTypes.function.isRequired,
    isBetween: PropTypes.function.isRequired,
    month: PropTypes.string.isRequired
};

import React, {Component, PropTypes} from 'react';

export default class Days extends Component {
    selectStart(startDate) {
        this.props.selectStart(startDate, this.props.month);
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

        return (<tbody>
            {this.weeks.map((innerWeek, i) => {
                return (<tr key={i}>
                    {innerWeek.map((days, j) => {
                        if (days === startDate && this.props.month === startMonth) {
                            return <td className="selected" key={j} onClick={this.selectStart.bind(this, days)}>{days}</td>;
                        }
                        return <td key={j} onClick={this.selectStart.bind(this, days)}>{days}</td>;
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

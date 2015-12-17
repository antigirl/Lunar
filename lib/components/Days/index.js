import React, {Component, PropTypes} from 'react';

export default class Days extends Component {
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

        return (<tbody>
            {this.weeks.map((innerWeek, i) => {
                return (<tr key={i}>
                    {innerWeek.map((days, j) => {
                        return <td key={j}>{days}</td>;
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

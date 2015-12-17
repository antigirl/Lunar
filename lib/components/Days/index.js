import React, {Component, PropTypes} from 'react';

export default class Days extends Component {
    constructor(props) {
        super(props);

        this.weeks = [[], [], [], [], [], []];
        let weekArray = 0;

        let daysInMonth = props.daysInMonth;
        for (let i = 1; i <= daysInMonth; i++) {
            if (i <= props.startDay) {
                this.weeks[weekArray][i - 1] = null;
                daysInMonth++;
            } else {
                this.weeks[weekArray][i - 1] = i - props.startDay;
            }

            if (i % 7 === 0) {
                weekArray += 1;
            }
        }
    }

    render() {
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

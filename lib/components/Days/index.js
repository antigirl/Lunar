import React, {Component, PropTypes} from 'react';

export default class Days extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        let days = [];
        this.weeks = [[],[],[],[],[],[]]
        let weekArray = 0;

        //console.log(props.startDay); // 2

        for (let i = 1; i <= props.daysInMonth; i++) {
            if(i <= props.startDay) {
                this.weeks[weekArray][i-1] = null;
            } else {
                this.weeks[weekArray][i-1] = i - props.startDay;
            }

            if (i % 7 === 0) {
                weekArray += 1;
            }
        }
    }

    render() {
        return (<tr>
            {this.weeks.map((innerWeek) => {
                return <tr>
                    {innerWeek.map((days) => {
                        return <td>{days}</td>
                    })}
                    </tr>
            })}
            </tr>
        );
    }

}

Days.propTypes = {
    daysInMonth: PropTypes.number.isRequired
};

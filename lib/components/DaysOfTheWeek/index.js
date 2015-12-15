import React, {Component, PropTypes} from 'react';

export default class DaysOfTheWeek extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <tr>
                {this.props.week.map((day)=> {
                    return <td>{day}</td>;
                })}
            </tr>
        );
    }

}

DaysOfTheWeek.propTypes = {
    week: PropTypes.array.isRequired
};

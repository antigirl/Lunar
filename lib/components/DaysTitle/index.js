import React, {Component} from 'react';
import moment from 'moment';

export default class DaysTitle extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.week = moment.weekdaysShort();
    }

    render() {
        return (
            <tr>
                {this.week.map((day, i)=> {
                    return <td key={i}>{day}</td>;
                })}
            </tr>
        );
    }
}

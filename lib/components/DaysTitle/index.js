import React, {Component} from 'react';

export default class DaysTitle extends Component {
    render() {
        return (
            <tr>
                {this.props.week.map((day, i)=> {
                    return <td key={i}>{day}</td>;
                })}
            </tr>
        );
    }
}

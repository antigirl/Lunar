import React, {Component, PropTypes} from 'react';
import moment from 'moment';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.month = moment(props.month).format('MMM');
    }

    render() {
        return (
            <tr><td colSpan="7" className="title">{this.month} {this.props.year}</td></tr>
        );
    }

}

Title.propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

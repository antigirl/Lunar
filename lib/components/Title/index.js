import React, {Component, PropTypes} from 'react';

export default class Title extends Component {
    render() {
        return (
            <tr><td colSpan="7" className="tableTitles">{this.props.month} {this.props.year}</td></tr>
        );
    }

}

Title.propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

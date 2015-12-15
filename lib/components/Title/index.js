import React, {Component, PropTypes} from 'react';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <thead><tr><td colSpan='6' className='title'>{this.props.month} {this.props.year}</td></tr></thead>
        );
    }

}

Title.propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

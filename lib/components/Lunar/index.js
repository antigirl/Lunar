import React, {Component} from 'react';
// import Calendar from '../Calendar';
import moment from 'moment';
import momentAPI from 'utils/momentAPI';

export default class Lunar extends Component {
    constructor(props) {
        super(props);
        // this.today = moment;
        //
        // const todaysDate = this.today().format('D-M-YYYY');
        // const today = todaysDate.split('-');
        //
        // this.dates = {
        //     date: today[0],
        //     month: today[1],
        //     year: today[2],
        // };

        console.log(momentAPI.getDate('m'));

    }

    componentWillMount() {
        //this.setState(this.dates);
    }

    nextD() {
        //this.setState
    }

    render() {
        return (
            <div>  x </div>
        );
    }
}

// <div>
//     <Calendar {...this.state}/>
//     <Calendar {...this.state} secondCal={true}/>
//     <button onClick={this.nextD.bind(this)}>Next</button>
// </div>

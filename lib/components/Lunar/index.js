import React, {Component} from 'react';
import Title from '../Title';
import DaysOfTheWeek from '../DaysOfTheWeek';
import Days from '../Days';
import moment from 'moment';

export default class Lunar extends Component {
    constructor(props) {
        super(props);
        this.today = moment;

        this.dates = {
            month: this.today().format('MMM'),
            year: this.today().format('YYYY'),
            week: this.today.weekdays()
        };

        this.daysInMonth = this.today(this.dates.year + '-' + this.dates.month, 'YYY-MMM').daysInMonth();
        this.startDay = this.today(this.dates.year + '-' +  this.today().format('MM') + '-' + '01').day();
    }

    componentWillMount() {
        this.setState(this.dates);
    }

    nextD() {
        this.setState({
            month: this.today('Dec', 'MMM').add(1, 'months').format('MMM')
        }); // hi farz



        //this.dates.month = this.today().add(1, 'months').format('MMM')

    }

    render() {
        return (
            <table>
                <Title month={this.state.month} year={this.state.year}/>
                <tbody>
                    <DaysOfTheWeek week={this.state.week}/>
                    <Days daysInMonth={this.daysInMonth} startDay={this.startDay}/>
                    <tr><td><button onClick={this.nextD.bind(this)}>Next</button></td></tr>
                </tbody>
            </table>
        );
    }

}

import React, {Component} from 'react';
import Calendar from '../Calendar';
//import moment from 'moment';

export default class Lunar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            next: 0,
            prev: 0,
            startDate: 0,
            endDate: 0,
            hoverStartDate: 0
        });
    }

    next(type) {
        let next = this.state.next;
        let prev = this.state.prev;

        if (type === 'next') {
            next++;
        }

        if (type === 'prev') {
            prev++;
        }

        this.setState({
            next,
            prev
        });
    }

    selectStart(startDate, startMonth, startYear) {
        this.setState({
            startDate: startDate + '-' + startMonth + '-' + startYear
        });
    }

    setHover(hoverDate, hoverMonth, hoverYear){
        this.setState({
            hoverDate: hoverDate + '-' + hoverMonth + '-' + hoverYear
        });
    }

    selectEnd(endDate, endMonth, endYear) {
        let setEndDate = endDate + '-' + endMonth + '-' + endYear
        if(endDate === 0) {
            setEndDate = 0;
        }
        this.setState({
            endDate: setEndDate
        });
    }

    buttonCTA(type) {
        if (type === 'cancel') {
            this.componentWillMount();
        } else {
            if (!this.state.startDate || !this.state.endDate) {
                alert('please selected start and end date')
            }
            alert('startDate =>' + this.state.startDate + '\n' + 'endDate =>' + this.state.endDate);
        }
    }

    render() {
        const numbOfCalendars = 2;
        let calendars = [];
        for (let i = 1; i <= numbOfCalendars; i++) {
             calendars.push(<Calendar cal={i} key={i} {...this.state} setHover={this.setHover.bind(this)} selectStart={this.selectStart.bind(this)} selectEnd={this.selectEnd.bind(this)}/>);
        }
        return (
            <div className="wrapper">
                <div className="title">Select check in and check out date</div>
                <button onClick={this.next.bind(this, 'prev')}> &lt; </button>
                {calendars}
                <button onClick={this.next.bind(this, 'next')}> &gt; </button>
                <div className="ctabuttons">
                    <button onClick={this.buttonCTA.bind(this, 'cancel')}> Canel </button>
                    <button onClick={this.buttonCTA.bind(this)}> Confirm </button>
                </div>
            </div>
        );
    }
}

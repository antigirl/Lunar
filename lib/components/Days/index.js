import React, {Component, PropTypes} from 'react';

export default class Days extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    selectStartEnd(theDate) {
        if (!this.props.startDate && !this.props.endDate) {
            this.props.selectStart(theDate, this.props.month, true);
        } else if (this.props.startDate && !this.props.endDate) {
            this.props.selectEnd(theDate, this.props.month);
        } else if (this.props.startDate && this.props.endDate) {
            this.props.selectStart(theDate, this.props.month, true);
            this.props.selectEnd(0,0);
        }
    }


    selectHover(theDate) {
        this.props.selectStart(theDate, this.props.month);
    }

    render() {
        this.weeks = [[], [], [], [], [], []];
        let weekArray = 0;

        let daysInMonth = this.props.daysInMonth;
        for (let i = 1; i <= daysInMonth; i++) {
            if (i <= this.props.startDay) {
                this.weeks[weekArray][i - 1] = null;
                daysInMonth++;
            } else {
                this.weeks[weekArray][i - 1] = i - this.props.startDay;
            }

            if (i % 7 === 0) {
                weekArray += 1;
            }
        }

        const startDateProp = this.props.startDate;
        let startDate = 0;
        let startMonth;
        if (startDateProp) {
            let startDateSplit = startDateProp.split('-');
            startDate = parseInt(startDateSplit[0]);
            startMonth = startDateSplit[1];
        }

        const endDateProp = this.props.endDate;
        let endDate = 0;
        let endMonth;
        if (endDateProp) {
            let endDateSplit = endDateProp.split('-');
            endDate = parseInt(endDateSplit[0]);
            endMonth = endDateSplit[1];
        }

        const hoverDateProp = this.props.hoverDate;
        let hoverDate = 0;
        let hoverMonth;
        if (hoverDateProp) {
            let hoverDateSplit = hoverDateProp.split('-');
            hoverDate = parseInt(hoverDateSplit[0]);
            hoverMonth = hoverDateSplit[1];
        }

        return (<tbody>
            {this.weeks.map((innerWeek, i) => {
                return (<tr key={i}>
                    {innerWeek.map((days, j) => {
                        if (days === hoverDate && this.props.month === hoverMonth) {
                            return <td className="startHover" key={j} onMouseOver={this.selectHover.bind(this, days, true)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                        }
                        if (days === startDate && this.props.month === startMonth) {
                            return <td className="startSelected" key={j} onMouseOver={this.selectHover.bind(this, days, true)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                        }
                        if (days === endDate && this.props.month === endMonth) {
                            return <td className="endSelected" key={j} onMouseOver={this.selectHover.bind(this, days, true)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                        }
                        if ((days >= startDate && this.props.month >= startMonth) && (days <= endDate && this.props.month <= endMonth) && days != null) {
                            return <td className="midSelected" key={j} onMouseOver={this.selectHover.bind(this, days, true)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                        }
                        return <td key={j} onMouseOver={this.selectHover.bind(this, days)} onClick={this.selectStartEnd.bind(this, days)}>{days}</td>;
                    })}
                </tr>);
            })}
            </tbody>
        );
    }

}

Days.propTypes = {
    daysInMonth: PropTypes.number.isRequired
};

'user strict'
import moment from 'moment';

const momentApi = {
    moment: moment(),
    getDate: function (type) {
        const momentDate = this.moment.format('D-M-YYYY');
        const today = momentDate.split('-');
        if (type === 'd') {
            return today[0];
        }
        if (type === 'm') {
            return today[1];
        }
        if (type === 'y') {
            return today[2];
        }
    },

    getFormattedDate: function(date, type) {
        if (type === 'M') {
            return this.moment(pdate).format('MMM');
        }
    },

    getDaysInMonth: function (year, month) {
        return this.moment(year + '-' + month, 'YYYY-M').daysInMonth();
    },

    getStartDay: function (year, month) {
        return this.moment(year + '-' +  month + '-' + '01').day();
    },

    getWeekdays: function () {
        return this.moment.weekdaysShort();
    }

};

export default momentApi;

export default class WeekdayCalculator {
    constructor(dateString) {

        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.date = new Date(dateString);
    }
    calculateDayOfWeek() {
        if (isNaN(this.date)) {
            return 'invalid date';
        }
        const dayIndex = this.date.getUTCDay();
        const dayOfWeek = this.daysOfWeek[dayIndex];

        return dayOfWeek;
    }

}


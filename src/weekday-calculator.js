export default function WeekdayCalculator(dateString) {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);

    if (isNaN(date)) {
    return 'invalid date';
    }
    const dayIndex = date.getUTCDay();
    const dayOfWeek = daysOfWeek[dayIndex];

    return dayOfWeek;



}


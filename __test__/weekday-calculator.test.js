import WeekdayCalculator from "./../src/weekday-calculator.js";

describe('WeekdayCalculator', () => {

    test('It should return "Tuesday" for the date 2023-11-14', () => {
        const dayOfWeek = WeekdayCalculator('2023-11-14');
        expect(dayOfWeek).toBe('Tuesday');
    });

    test('It should return "invalid date" for the date 2023-11-32', () => {
        const dayOfWeek = WeekdayCalculator('2023-11-32');
        expect(dayOfWeek).toBe("invalid date");
    });

    test('It should return the day of the week for past dates', () => {
        const dayOfWeek = WeekdayCalculator('1994-11-14');
        expect(dayOfWeek).toBe("Monday");
    });
});
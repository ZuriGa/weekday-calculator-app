import WeekdayCalculator from './weekday-calculator.js';
import './../css/styles.css';

const calculatorButton = document.getElementById("calculatorButton");
calculatorButton.addEventListener("click", () => {
    const dateInput = document.getElementById("dateInput").value;
    const calculator = new WeekdayCalculator(dateInput);
    const result = calculator.calculateDayOfWeek();
    document.getElementById("result").textContent = `The day of the week is ${result}.`;

});
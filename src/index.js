import './../css/styles.css';
function WeekdayCalculator() {
    const dateInput = document.getElementById("dateInput").value;
    const date = new Date(dateInput);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
}

document.getElementById("calculateButton").addEventListener("click", () => {
    const result = WeekdayCalculator();
    document.getElementById("result").textContent = `The day of the week is ${result}.`;
});
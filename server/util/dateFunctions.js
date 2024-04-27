
//returns the next or current Date for weekDay passed
exports.getNextCurrentDate = (dayName) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const currentDay = today.getDay();
    const targetDay = daysOfWeek.indexOf(dayName);

    let daysToAdd = targetDay - currentDay;

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysToAdd);

    return nextDate;
}
const stringToDouble = (string) => {
    const double = parseFloat(string);
    if (string === undefined) {
        throw 'you need to enter the amount of gold you sent, e.g. "!addmoney 500"'
    } else if (isNaN(double)) {
        throw 'you entered something that wasnt a number, please use something like this: "!addmoney 500"';
    } else {
        return double;
    }
}

const getCurrentWeek = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const daysInYearSoFar = Math.floor((today-firstDayOfYear) / (24 * 60 * 60 * 1000));
    return Math.ceil((today.getDay() + 1 + daysInYearSoFar) / 7);
}

module.exports = {
	stringToDouble: stringToDouble,
    getCurrentWeek: getCurrentWeek
};
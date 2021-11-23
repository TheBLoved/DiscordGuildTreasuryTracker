const stringToInt = (string) => {
    const int = parseInt(string);
    if (string === undefined) {
        throw 'you need to enter the amount of gold you sent, e.g. "!addmoney 500"'
    } else if (isNaN(int)) {
        throw 'you entered something that wasnt a number, please use something like this: "!addmoney 500"';
    } else {
        return int;
    }
}

module.exports = {
	stringToInt: stringToInt
};
exports.dateToIsoString = (date) => new Date(date).toISOString();

exports.getStartOfWeek = (w, y) => {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}

exports.getEndOfWeek = (w, y) => {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekEnd = simple;
    if (dow <= 4) {
        ISOweekEnd.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
        ISOweekEnd.setDate(simple.getDate() + 8 - simple.getDay());
    }
    ISOweekEnd.setDate(ISOweekEnd.getDate() + 6);
    return ISOweekEnd;
}
exports.startDateOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

exports.endOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);

exports.getStartDateOfMonth = (month) => new Date(month);

exports.getEndDateOfMonth = (month) => new Date(new Date(month).getFullYear(), new Date(month).getMonth() + 1, 1);

exports.getEndDateOfYear = (year) => new Date(new Date(year).getFullYear(), new Date(year).getMonth() + 12, 1);
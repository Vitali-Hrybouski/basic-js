module.exports = function repeater(str, options) {
    let arr = [];
    if (options.separator == undefined) options.separator = "+";
    if (options.additionSeparator == undefined) options.additionSeparator = "|";

    function addAdditionSeparator() {
        let arrAddition = [];
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            arrAddition.push(String(options.addition));

        }
        return arrAddition.join(options.additionSeparator);
    };

    if (options.repeatTimes == undefined) {
        if (options.additionRepeatTimes == undefined) arr.push(str + String(options.addition));
        else arr.push(str + addAdditionSeparator());
    }

    else {
        for (let i = 0; i < options.repeatTimes; i++) {
            if (options.additionRepeatTimes == undefined) arr.push(str);
            else {
                arr.push(str + addAdditionSeparator());
            }
        }

    }
    return arr.join(options.separator);
}

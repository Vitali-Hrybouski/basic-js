module.exports = function transform(arr) {

    if (Array.isArray(arr) != true) throw 'Not implemented';

    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '--discard-next') {

            if (i + 1 >= arr.length) break;
            i++;
            continue;
        }

        if (arr[i] === '--discard-prev') {

            if (i - 1 < 0) continue;
            result.pop();
            continue;
        }

        if (arr[i] === '--double-next') {

            if (i + 1 >= arr.length) break;
            result.push(arr[i + 1]);
            continue;
        }
        if (arr[i] === '--double-prev') {

            if (i - 1 < 0) continue;
            result.push(arr[i - 1]);
            continue;
        }
        result.push(arr[i]);
    }
    return result;

}

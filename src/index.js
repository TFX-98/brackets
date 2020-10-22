module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        let strSymb = strArr[i];
        for (let j = 0; j < bracketsConfig.length; j++) {
            let configPair = bracketsConfig[j];
            if (stack.length == 0 && strSymb == configPair[0]) {
                stack.push(configPair[0]);
            } else if (strSymb == configPair[0] && stack[stack.length - 1] != configPair[1]) {
                stack.push(configPair[0]);
            } else if (strSymb == configPair[1]) {
                if (stack[stack.length - 1] == configPair[0]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length == 0 ? true : false;
}

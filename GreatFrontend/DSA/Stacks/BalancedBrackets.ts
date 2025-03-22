export default function isBalancedBrackets(str: string): boolean {
    let res: string[] = [];

    for (let i: number = 0; i < str.length; i++) {
        let cur = str[i];
        if ((cur === '(') || (cur === '{' || (cur === '['))) {
            res.push(str[i]);
        } else {
            if (res.length === 0)
                return false;
            if (
                (res[res.length - 1] === '(' && cur === ')') ||
                (res[res.length - 1] === '{' && cur === '}') ||
                (res[res.length - 1] === '[' && cur === ']')
            ) {
                res.pop();
            }
        }
    }

    return res.length === 0;
}

console.log(isBalancedBrackets('(){}[]')) // true
console.log(isBalancedBrackets('(){}[]')) // true
console.log(isBalancedBrackets('(){}[')) // false
console.log(isBalancedBrackets('(){}]')) // false
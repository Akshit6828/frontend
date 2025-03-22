export default function findDuplicates(numbers) {
    let elements = new Set();
    numbers.forEach(num => elements.add(num));
    return (elements.size !== numbers.length);
}



console.log(findDuplicates[10, 7, 0, 0, 9]) // true
console.log(findDuplicates[10, 7, 0, 0, 9]) // false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    return numbers.reduce((accumulator, currentValue, index) => {
        if (index === 0) return `${accumulator}(${currentValue}`;
        if (index === 2) return `${accumulator}${currentValue}) `;
        if (index === 3) return `${accumulator}${currentValue}`;
        if (index === 5) return `${accumulator}${currentValue}-`;
        return `${accumulator}${currentValue}`;
    }, "");
}
const format = createPhoneNumber(numbers);

console.log(format);
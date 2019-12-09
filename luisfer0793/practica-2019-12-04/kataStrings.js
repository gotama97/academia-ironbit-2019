// ----------- Variables Globales -------------
const empty = [];
const single = [{name: 'Bart'}];
const several = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, ];

// ----------- Propuesta 1 -------------
function list(names) {
    const totalNames = [];

    if (names.length === 0) return '';
    if (names.length === 1) return names[0].name;
    if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

    names.forEach(currentObject => totalNames.push(currentObject.name));

    let initialNames = totalNames.slice(0, totalNames.length - 2).join(', ');
    const lastTwoNames = totalNames.slice(totalNames.length - 2).join(' & ');

    return `${initialNames}, ${lastTwoNames}`;
}

console.log(list(empty));
console.log(list(single));
console.log(list(several));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let total = 0;
for (let name in salaries) {
    total += salaries[name];
}

console.log(total);

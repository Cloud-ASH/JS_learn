let styles = ['James', 'Brennie'];

// Add "Robert" to the end
styles.push('Robert');

// Replace middle value with "Calvin"
let mid = Math.floor(styles.length / 2);
styles[mid] = 'Calvin';

// Remove first element and print it
let first = styles.shift();
console.log(first);

// Add "Rose" and "Regal" to the beginning
styles.unshift('Rose', 'Regal');

console.log(styles);

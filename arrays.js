const arr = ['hello, 345, true'];

console.log( typeof arr);

console.log( Array.isArray(arr));

const movies = ['Stree2', 'Pathan', 'Jhon Wick','Spiderman', 'Salaar'];

console.log(movies.length );

//  indexing
console.log( movies[2] );
console.log( movies.indexOf('Spiderman'));

// console.log( movies[-2] );
// console.log( movies.at(-2) );

movies[2] = 'James Bond';

console.log( movies);

// slicing

console.log( movies.slice(1, 4));
console.log( movies.slice(2));
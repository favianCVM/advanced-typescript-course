// Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera

// const user: [string, number, boolean] = ['Irving', 20, true];

const user: [string, number] = ['mike', 23]; //* Esto es una tupla, solamente puede tener esos 2 argumentos en ese orden

console.log(user[0]); //* 'mike
console.log(user[1]); //* 23

const [username, age] = user; //* Destructuración de una tupla
console.log(username); //* 'mike'
console.log(age); //* 23

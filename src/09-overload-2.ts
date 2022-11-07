// En conclusión, lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor. Se que no le entendiste, veamos un ejemplo

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else if (typeof input === 'string') {
    return input.split(''); // array
  } else if (typeof input === 'number') {
    return input % 2 === 0;
  }
}

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(); // string
//   } else {
//     return input.split('');
//   }
// }

const rtaArray = 'hola mundo';
// console.log(parseStr(rtaArray));
console.log(parseStr(2));

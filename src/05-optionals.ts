// Nullish coalescing operator (??) VS logical OR operator (||)

// La gran diferencia entre estos dos es que el logical OR operator (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, a demás de null y undefined, mientras que nullsh coalescing operator tomo como valores falso solamente a null y undefined.

// En el caso de las funciones, se ejecuta la misma, se realizan todos los cálculos que tienen que hacer, pero ambos operadadores ?? y || únicamente se fijan en lo que retorna dichas funciones.

export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  };
};

createProduct(1, 12, true);

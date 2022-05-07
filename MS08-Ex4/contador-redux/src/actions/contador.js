export const INCREMENTAR = 'CONTADOR::INCREMENTAR';
export const DECREMENTAR = 'CONTADOR::DECREMENTAR';

export const incrementarContador = () => ({
  type: INCREMENTAR
});

export const decrementarContador = () => ({
  type: DECREMENTAR
})
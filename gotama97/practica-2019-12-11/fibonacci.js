
function *fibonacci(n, current = 0, next = 1) {
    //valoramos que hayamos llegado al final
    if (n === 0) {
      return current;
    }
    yield current;
    //asignamos el elemento llamando de nuevo a la funcion generadora
    yield *fibonacci(n-1, next, current + next);
  }
  let a = [...fibonacci(20)]

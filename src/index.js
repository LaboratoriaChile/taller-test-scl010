// Botón que utilzaré luego con addEventListener add
const btnAdd = document.getElementById('add');
// Botón que utilzaré luego con addEventListener multiplicación
//const btnMultiply = document.getElementById('multiply');
// Contenedor donde imprimiré mi resultado en Html
const containerResult = document.getElementById('result');

btnAdd.addEventListener('click', () => {
  let firstNumbers = parseInt(document.getElementById('first').value);
  let secondNumbers = parseInt(document.getElementById('second').value);

  containerResult.innerHTML = window.operators.add(firstNumbers, secondNumbers);

})

// Falta crear evento para boton multiplicar

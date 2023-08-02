let numeroAdivinar;

function comenzarJuego() {
  document.getElementById('juego').style.display = 'block';
  numeroAdivinar = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAdivinar); 
}

function verificarNumero() {
  const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
  if (isNaN(numeroUsuario)) {
    alert('Por favor, ingresa un número válido.');
  } else if (numeroUsuario === numeroAdivinar) {
    alert('¡Felicidades! Adivinaste el número.');
    document.getElementById('juego').style.display = 'none';
  } else if (numeroUsuario < numeroAdivinar) {
    alert('El número ingresado es menor al número a adivinar. Sigue intentando.');
  } else {
    alert('El número ingresado es mayor al número a adivinar. Sigue intentando.');
  }
}

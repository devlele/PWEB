function jogar(escolhaUsuario) {
  const random = Math.random();

  let escolhaComputador = '';

  if (random < 0.33) {
    escolhaComputador = 'pedra';
  } else if (random < 0.66) {
    escolhaComputador = 'papel';
  } else {
    escolhaComputador = 'tesoura';
  }

  document.getElementById('escolhaComputador').textContent = 'Computador escolheu: ' + escolhaComputador;

  let resultado = '';

  if (escolhaUsuario === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra')
  ) {
    resultado = 'Você venceu!';
  } else {
    resultado = 'Computador venceu!';
  }

  document.getElementById('resultado').textContent = resultado;
}

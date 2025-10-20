function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function mostrarMaior() {
  const a = Number(document.getElementById('num1_1').value);
  const b = Number(document.getElementById('num1_2').value);
  const c = Number(document.getElementById('num1_3').value);
  const maior = maiorNumero(a, b, c);
  document.getElementById('resultadoMaior').textContent = 'Maior número: ' + maior;
}

function ordenarCrescente(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => x - y);
  return arr;
}

function mostrarOrdem() {
  const a = Number(document.getElementById('num2_1').value);
  const b = Number(document.getElementById('num2_2').value);
  const c = Number(document.getElementById('num2_3').value);
  const ordem = ordenarCrescente(a, b, c);
  document.getElementById('resultadoOrdem').textContent = 'Ordem crescente: ' + ordem.join(', ');
}

function ehPalindromo(str) {
  const s = str.toUpperCase().replace(/\s+/g, ''); 
  const reverso = s.split('').reverse().join('');
  return s === reverso;
}

function verificarPalindromo() {
  const palavra = document.getElementById('palavra').value;
  if (!palavra) {
    document.getElementById('resultadoPalindromo').textContent = 'Por favor, digite uma palavra.';
    return;
  }
  const resultado = ehPalindromo(palavra) ? 'É palíndromo!' : 'Não é palíndromo.';
  document.getElementById('resultadoPalindromo').textContent = resultado;
}

function tipoTriangulo(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'Não forma um triângulo.';
  }

  if (a === b && b === c) {
    return 'Triângulo Equilátero.';
  } else if (a === b || b === c || a === c) {
    return 'Triângulo Isósceles.';
  } else {
    return 'Triângulo Escaleno.';
  }
}

function verificarTriangulo() {
  const a = Number(document.getElementById('lado1').value);
  const b = Number(document.getElementById('lado2').value);
  const c = Number(document.getElementById('lado3').value);

  if (a <= 0 || b <= 0 || c <= 0) {
    document.getElementById('resultadoTriangulo').textContent = 'Lados devem ser maiores que zero.';
    return;
  }

  const resultado = tipoTriangulo(a, b, c);
  document.getElementById('resultadoTriangulo').textContent = resultado;
}

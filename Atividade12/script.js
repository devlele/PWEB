function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;

  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularAreaRetangulo() {
  let base = parseFloat(prompt("Digite a base do retângulo:"));
  let altura = parseFloat(prompt("Digite a altura do retângulo:"));

  let ret = new Retangulo(base, altura);
  let area = ret.calcularArea();

  document.getElementById("resultadoRetangulo").innerHTML =
    `A área do retângulo é: <strong>${area}</strong>`;
}


class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nomeCorrentista() { 
    return this._nomeCorrentista; 
}
  set nomeCorrentista(valor) { 
    this._nomeCorrentista = valor; 
}

  get banco() { 
    return this._banco; 
}
  set banco(valor) { 
    this._banco = valor; 
}

  get numeroConta() { 
    return this._numeroConta; 
}
  set numeroConta(valor) { 
    this._numeroConta = valor; 
}

  get saldo() { 
    return this._saldo; 
}
  set saldo(valor) { 
    this._saldo = valor; 
}
}

class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() { 
    return this._saldoEspecial; 
}
  set saldoEspecial(valor) { 
    this._saldoEspecial = valor; 
}
}

class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() { 
    return this._juros; 
}
  set juros(valor) { 
    this._juros = valor; 
}

  get dataVencimento() { 
    return this._dataVencimento; 
}
  set dataVencimento(valor) { 
    this._dataVencimento = valor; 
}
}

function criarContas() {
  let nomeC = prompt("Nome do correntista (Conta Corrente):");
  let bancoC = prompt("Banco (Conta Corrente):");
  let numeroC = prompt("Número da conta (Corrente):");
  let saldoC = parseFloat(prompt("Saldo da conta (Corrente):"));
  let saldoEspecial = parseFloat(prompt("Saldo Especial (Corrente):"));

  let contaCorrente = new Corrente(nomeC, bancoC, numeroC, saldoC, saldoEspecial);

  let nomeP = prompt("Nome do correntista (Poupança):");
  let bancoP = prompt("Banco (Poupança):");
  let numeroP = prompt("Número da conta (Poupança):");
  let saldoP = parseFloat(prompt("Saldo da conta (Poupança):"));
  let juros = parseFloat(prompt("Juros da Poupança (%):"));
  let dataVencimento = prompt("Data de Vencimento da Poupança (dd/mm/aaaa):");

  let contaPoupanca = new Poupanca(nomeP, bancoP, numeroP, saldoP, juros, dataVencimento);

  document.getElementById("resultadoContas").innerHTML = `
    <h3>Conta Corrente:</h3>
    <p><strong>Nome:</strong> ${contaCorrente.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${contaCorrente.banco}</p>
    <p><strong>Número:</strong> ${contaCorrente.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${contaCorrente.saldo.toFixed(2)}</p>
    <p><strong>Saldo Especial:</strong> R$ ${contaCorrente.saldoEspecial.toFixed(2)}</p>

    <h3>Conta Poupança:</h3>
    <p><strong>Nome:</strong> ${contaPoupanca.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${contaPoupanca.banco}</p>
    <p><strong>Número:</strong> ${contaPoupanca.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${contaPoupanca.saldo.toFixed(2)}</p>
    <p><strong>Juros:</strong> ${contaPoupanca.juros}%</p>
    <p><strong>Data de Vencimento:</strong> ${contaPoupanca.dataVencimento}</p>
  `;
}

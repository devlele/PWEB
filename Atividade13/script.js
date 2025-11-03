const imagem = document.getElementById("imagemJanela");
const titulo = document.getElementById("titulo");

const janelaFechada = "images/janela_fechada.jpg";
const janelaAberta = "images/janela_aberta.jpg";
const janelaQuebrada = "images/janela_quebrada.jpg";

imagem.addEventListener("mouseover", abrirJanela);
imagem.addEventListener("mouseout", fecharJanela);
imagem.addEventListener("click", quebrarJanela);

function abrirJanela() {
  if (imagem.src.includes("janela_quebrada")) return; 
  imagem.src = janelaAberta;
  titulo.textContent = "Janela Aberta";
}

function fecharJanela() {
  if (imagem.src.includes("janela_quebrada")) return; 
  imagem.src = janelaFechada;
  titulo.textContent = "Janela Fechada";
}

function quebrarJanela() {
  imagem.src = janelaQuebrada;
  titulo.textContent = "Janela Quebrada";
}

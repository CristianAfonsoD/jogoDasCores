const cores = ["amarelo", "azul", "vermelho", "verde", "preto", "cinza"];
let corCorreta = "";
let pontos = 0;
let tempoRestante = 30;
let intervaloTempo;
let jogador = "";


const inputNome = document.getElementById("nome-jogador");
const btnJogar = document.getElementById("btn-jogar");
const mostrarCor = document.getElementById("mostrar-cor");
const botoesContainer = document.getElementById("botoes-container");
const pontuacaoEl = document.getElementById("pontuacao");
const tempoEl = document.getElementById("tempo");
const divInicio = document.getElementById("inicio");
const divJogo = document.getElementById("jogo");
const divFim = document.getElementById("fim");
const resultadoFinal = document.getElementById("resultado-final");
const btnJogarNovamente = document.getElementById("jogar-novamente");
const rankingEl = document.getElementById("ranking");
const listaRanking = document.getElementById("lista-ranking");

btnJogar.onclick = () => {
  jogador = inputNome.value.trim();
  if (jogador === "") {
    alert("Digite seu nome para jogar!");
    return;
  }

  divInicio.classList.add("oculto");
  divFim.classList.add("oculto");
  divJogo.classList.remove("oculto");

  iniciarJogo();
};

btnJogarNovamente.onclick = () => {
  pontos = 0;
  tempoRestante = 30;
  pontuacaoEl.textContent = `Pontos: 0`;
  divFim.classList.add("oculto");
  divJogo.classList.remove("oculto");
  iniciarJogo();
};

function iniciarJogo() {
  iniciarTemporizador();
  novaRodada();
}

function iniciarTemporizador() {
  tempoEl.textContent = `Tempo: ${tempoRestante}s`;
  intervaloTempo = setInterval(() => {
    tempoRestante--;
    tempoEl.textContent = `Tempo: ${tempoRestante}s`;
    if (tempoRestante <= 0) {
      finalizarJogo();
    }
  }, 1000);
}

function novaRodada() {
  corCorreta = cores[Math.floor(Math.random() * cores.length)];
  mostrarCor.textContent = `Cor: ${corCorreta.toUpperCase()}`;

  const coresEmbaralhadas = cores.sort(() => Math.random() - 0.5);
  botoesContainer.innerHTML = "";

  coresEmbaralhadas.forEach(cor => {
    const botao = document.createElement("button");
    botao.classList.add("botao-cor", cor);
    botao.onclick = () => verificarResposta(cor);
    botoesContainer.appendChild(botao);
  });
}

function verificarResposta(corClicada) {
  if (corClicada === corCorreta) {
    pontos += 10;
  } else {
    pontos -= 5;
    if (pontos < 0) pontos = 0;
  }
  pontuacaoEl.textContent = `Pontos: ${pontos}`;
  novaRodada();
}

function finalizarJogo() {
  clearInterval(intervaloTempo);
  divJogo.classList.add("oculto");
  resultadoFinal.innerHTML = `Jogador: <strong>${jogador}</strong><br>Pontuação final: <strong>${pontos}</strong>`;

  atualizarRanking(jogador, pontos);
  mostrarRanking();
  
  divFim.classList.remove("oculto");
}

function obterRanking() {
  return JSON.parse(localStorage.getItem("rankingJogadores")) || [];
}

function atualizarRanking(nome, pontos) {
  const ranking = obterRanking();

  ranking.push({ nome, pontos });

  ranking.sort((a, b) => b.pontos - a.pontos);

  const top5 = ranking.slice(0, 5);

  localStorage.setItem("rankingJogadores", JSON.stringify(top5));
  return top5;
}


function mostrarRanking() {
  const ranking = obterRanking();
  listaRanking.innerHTML = "";

  ranking.forEach((jogador, index) => {
    const item = document.createElement("li");
    item.textContent = `${jogador.nome} - ${jogador.pontos} pontos`;
    listaRanking.appendChild(item);
  });

  rankingEl.classList.remove("oculto");
}
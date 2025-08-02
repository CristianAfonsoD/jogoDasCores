# 🎨 Jogo das Cores

## 👤 Autor

**Cristian Afonso Dias**

---

## 📜 Regras do Jogo

Este é um jogo de memória visual baseado em reconhecimento de cores. A versão aqui implementada segue as seguintes regras e restrições:

- ✅ Toda interação ocorre na **interface da tela**, sem uso do console.
- ✅ O jogador **inicia o jogo** ao clicar no botão `Jogar`, após inserir seu nome.
- ✅ O jogo possui um **grid de 3x2 botões**, totalizando **6 cores** diferentes:
  - Amarelo, Azul, Vermelho, Verde, Preto e Cinza.
- ✅ A pontuação é calculada da seguinte forma:
  - Acerto: **+10 pontos**
  - Erro: **-5 pontos**, mas **a pontuação mínima é 0**.
- ✅ A cada clique, a pontuação é **atualizada na tela em tempo real**.
- ✅ O jogador possui **30 segundos** para jogar.
- ✅ O jogo termina automaticamente quando o tempo acaba.
- ✅ Ao final, são exibidos:
  - Nome do jogador
  - Pontuação final
  - Botão para `Jogar Novamente`
- ✅ O jogo armazena e exibe os **5 melhores jogadores** no ranking.

---

## 🎮 Como Jogar

1. Digite seu nome no campo exibido na tela inicial.
2. Clique em `Jogar`.
3. Memorize a **cor mostrada no topo** da tela.
4. Clique no botão que representa **essa mesma cor** entre os botões exibidos.
5. A cada acerto ou erro, sua **pontuação é atualizada**.
6. Quando o **tempo chegar a zero**, o jogo será finalizado e a tela de resultado será exibida.
7. Clique em `Jogar Novamente` para reiniciar uma nova rodada.

---

## Créditos
1. [W3scholss](https://www.w3schools.com/js/js_htmldom.asp)
2. https://arthurporto.notion.site/08-Javascript-DOM-22e06b94b9cb806bbe35fefaf11bad29
3. Lógica de embaralhamento: Math.random() com sort()

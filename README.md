![Cypress.io](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/ac1e1/cypress-logo.webp)

# Exercício Cypress - Teste de UI

| Matricula | Nome           |
| :-------: | -------------- |
|   1411    | Danilo Ribeiro |

Este projeto tem como objetivo testar a interface do usuário.

## 🌐 Instalação

Inicie clonando o projeto no seu computador.

```bash
git clone https://github.com/dmax101/provaS206
```

Logo após, execute o comando para instalar as dependências:

```bash
npm install
```

## 🏎️ Testes

Logo após, execute o comando para iniciar o gerenciador de testes do cypress:

```bash
./node_modules/.bin/cypress open
```

Logo irá abrir uma janela onde será possível escolher o teste `prova.spec.js` que está na pasta `0-inatel`. Clique no arquivo e outra janela abrirá com o teste que executará automaticamente.

🎌 Pronto! Agora você pode testar a interface do usuário.

## 📒 Relatórios

Para gerar um relatório e de quebra o vídeo do teste rodando no seu computador, execute o comando abaixo:

```bash
.\node_modules\.bin\cypress run --spec .\cypress\integration\0-inatel\prova.spec.js --browser chrome --reporter mochawesome
```

**_Vídeo_**: Assista o relatório [aqui](./cypress/videos/0-inatel/autoPractice.spec.js.mp4).

**_Relatório_**: Acesse o relatório [aqui](./mochawesome-report/mochawesome.html).

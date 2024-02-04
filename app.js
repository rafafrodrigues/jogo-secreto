// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//reduzindo as linhas que repetem o código usando funções com parâmentros
function exibirTextoNaTela(tag, texto) {
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
    //habilitar voz narrando os textos da tela. Parâmetros: texto, idioma e velocidade da fala
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// exibirTextoNaTela('h1', 'Jogo do número secreto');
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//trecho de código que executa/tem uma responsabilidade para uma determinada ação
// function verificarChute() {
//     console.log('O botão foi clicado!');
// }

let listaNumerosSorteados = [];
let tentativas = 1;

function verificarChute() {
    //pegar valor digitado no campo imput
    let chute = document.querySelector('input').value;    
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        //exibirTextoNaTela('p', 'Você descobriu o número secreto!');
        exibirTextoNaTela('p', mensagemTentativa);

        //habilitar botão "Novo jogo"
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

let numeroSecreto = gerarNumeroAleatorio();

//funções com retorno
function gerarNumeroAleatorio() {
    //gerar números entre 1 e 10, tirando as vírgulas, trazendo apenas o número inteiro
    // let num = parseInt(Math.random() * 10 + 1);
    let numeroGerado = parseInt(Math.random() * 10 + 1);

    //verificar se quantidade de elementos da lista foi atengido
    let quantidadeElementosNaLista = listaNumerosSorteados.length;
    
    //limpar lista quando atingir a quantidade
    if (quantidadeElementosNaLista == 10) {
        listaNumerosSorteados = [];
    }

    //includes = verificar se o número está na lista, se estiver retorna true, se não, retorna false
    if (listaNumerosSorteados.includes(numeroGerado)) {
        //se número existir na lista, precisamos gerar um novo número        
        return gerarNumeroAleatorio(); 
    } else {
        //inserir número gerado na lista
        listaNumerosSorteados.push(numeroGerado);
        console.log(listaNumerosSorteados);
        return numeroGerado;
    } 
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Desafios--------------------------------------------------------------------------------------------------------
//Criar uma função que exibe "Olá, mundo!" no console.
// function ola() {
//     console.log('Olá, Mundo!');
// }

// ola();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function exibeNome(nome) {
//     console.log('Olá, ' +nome+ '!');
// }

// exibeNome("Rafael");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobroNumero(numero) {
//     return numero * 2;    
// }

// let resultado = dobroNumero(7);
// console.log(resultado);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }

// let resultMedia = media(2, 5, 5);
// console.log('A média é: ' +resultMedia);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function numeroMaior(a, b) {
//     return a > b ? a : b;
// }

// let maiorNumero = numeroMaior(5, 218);
// console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por
// ele mesmo
// function multiplicaNumero(num) {
//     return num * num;
// }

// let numeroMultiplicado = multiplicaNumero(9);
// console.log(numeroMultiplicado);



//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, 
//e peso, em quilogramas, que serão recebidos como parâmetro.
// function calculoIMC(altura, peso) {
//     return peso / (altura * altura);
// }

// let imc = calculoIMC(1.70 , 72);
// console.log(imc);

//2-Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//https://www.educamaisbrasil.com.br/enem/matematica/fatorial
// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
// }
  
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);


//3-Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$4,80.
function converter(valorDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
let valorDolar = 3;
let valorEmReais = converter(valorDolar);
console.log(`${valorDolar} dólares equivalem a R$ ${valorEmReais}`);

//4-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que
// serão dadas como parâmetro.
function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura + largura) * 2;
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}
let altura = 3;
let largura = 5;
calcularAreaEPerimetro(altura, largura);

//5-Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será 
//fornecido como parâmetro. Considere Pi = 3,14.
// function calcularAreaEPerimetroSalaCircular() {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }
// let raio = 4; // em metros
// calcularAreaEPerimetroSalaCircular(raio);

//6-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function mostraTabuada(numeroT) {
//     for(let i = 1; i <= 10; i++) {
//         let resultado = numeroT * i;
//         console.log(`${numeroT} x ${i} = ${resultado}`);
//     }
// }
// let numeroT = 3;
// mostraTabuada(numeroT);


//Desafios array ----------------------------------------------------------------------------------------------
//1-Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2-Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos:
// 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3-dicione à lista linguagensD'Java', 'Ruby' e 'GoLang'eProgramacao os seguintes elementos: .
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//4-Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['Juliana', 'Ana', 'Mirela'];
console.log('Primeiro nome é: ' + nomes[0]);

//5-Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
nome = ['JavaScript', 'Python', 'Go'];
console.log('O segundo elemento é: ' + nome[1]);

//6-Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nome2 = ['JavaScript', 'Python', 'Go'];
console.log('O último elemento é: ' + nome2[2]);

//7-Crie uma lista com 5 nomes, exiba no console e remova apenas o último elemento.
nome3 = ['JavaScript', 'Python', 'Go', 'Javane', 'oliiis'];
console.log(nome3);
console.log(nome3.pop());
console.log(nome3);
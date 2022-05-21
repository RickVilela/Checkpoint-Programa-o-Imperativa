/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?
*/
function maiorMenor(a, b , c){
    if(a > b && a > c){
        console.log(`O número ${a} é o maior`);
    }
    else if (b > a && b > c){
        console.log(`O número ${b} é o maior`);
    }
    else if (c > a && c > b){
        console.log(`O número ${c} é o maior`);
    }
    else{
        console.log('O valor informado está incorreto');
    }
};

maiorMenor(5000 , 1000 , 90);

/*
2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)
*/

function doarSangue (idade){
    if( idade >=18 && idade <= 67){
        console.log("Você pode doar sangue! Salve a vida de alguém");
    }
    else{
        console.log("Você não tem a idade permitida para doar");
    }
};

doarSangue(20);

/*
3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo
*/
function testePositividade ( num ){
    if ( num > 0 ){
        console.log(`O valor (${num}) é Positivo`);
    }
    else if ( num < 0 ){
        console.log(`O valor (${num}) é Negativo`);
    }
    else{
        console.log("Valor inserido não é válido para o teste");
    }
}

testePositividade(50);

/* 
4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

function mediaAluno ( a , b ){
    media = (a + b) / 2;

    if ( media < 7 ){
        console.log(`Sua média foi ${media}, você foi Reprovado!`);
    }
    else if ( media >= 7 ){
        console.log(`Sua média foi ${media}, você foi Aprovado!`);
    }
    else if ( media === 10 ){
        console.log(`Sua média foi ${media}, você foi Aprovado com Distinção!`);
    }
};

mediaAluno( 6 , 9.5);
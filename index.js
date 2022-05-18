/*
1 - Pipoca = 10;
2 - Macarrão= 8;
3 - Carne = 15;
4 - Feijão = 12;
5 - Brigadeiro = 8;  
*/


function pipoca(tempo){
let pipoca = 10;

    if(tempo >= pipoca*2){
        return console.log("Ops, sua comida queimou!");
    }
    else if(tempo < pipoca){
        return console.log("Tempo insuficiente");
    }
    
    if(tempo >= pipoca*3){
        return console.log("Kabumm");
    }
    else if(pipoca === 10){
        return console.log("Prato pronto");
    }
    else{
        console.log("Prato inexistente");
    }
};

function macarrao(tempo){
let macarrao = 8;

    if(tempo >= macarrao*2){
        return console.log("Ops, sua comida queimou!");
    }
    else if(tempo < macarrao){
        return console.log("Tempo insuficiente");
    }
    
    if(tempo >= macarrao*3){
        return console.log("Kabumm");
    }
    else if(macarrao === 8){
        return console.log("Prato pronto");
    }
    else{
        console.log("Prato inexistente");
    }
};

function carne(tempo){
let carne = 15;

    if(tempo >= carne*2){
        return console.log("Ops, sua comida queimou!");
    }
    else if(tempo < carne){
        return console.log("Tempo insuficiente");
    }
    
    if(tempo >= carne*3){
        return console.log("Kabumm");
    }
    else if(carne === 15){
        return console.log("Prato pronto");
    }
    else{
        console.log("Prato inexistente");
    }
};

function feijao(tempo){

let feijao = 12;

    if(tempo >= feijao*2){
        return console.log("Ops, sua comida queimou!");
    }
    else if(tempo < feijao){
        return console.log("Tempo insuficiente");
    }
    
    if(tempo >= feijao*3){
        return console.log("Kabumm");
    }
    else if(feijao === 12){
        return console.log("Prato pronto");
    }
    else{
        console.log("Prato inexistente");
    } 
};

function brigadeiro(tempo){

let brigadeiro = 8;

    if(tempo >= brigadeiro*2){
        return console.log("Ops, sua comida queimou!");
    }
    else if(tempo < brigadeiro){
        return console.log("Tempo insuficiente");
    }
    
    if(tempo >= brigadeiro*3){
        return console.log("Kabumm");
    }
    else if(brigadeiro === 8){
        return console.log("Prato pronto");
    }
    else{
        console.log("Prato inexistente");
    }
};

/*PARA FAZER SEU DELICIOSO PRATO (OU NÃO) DIGITE O NOME E ENTRE () DIGITE O TEMPO DESEJADO
CASO QUEIRA O PADRÃO, DEIXE EM BRANCO!! 

EX: macarrao()
*/

pipoca();

console.log("Prato pronto, bom apetite!!")
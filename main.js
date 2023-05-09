/*Como buscar um elemento no Java Script

Forma 1 document.querySelector('.exemplo'); = class
Forma 2 document.querySelector('#exemplo'); = ID
Forma 3 document.querySelector('input[type=tel]'); Tag - Type = atributo
Forma 4 document.querySelectorAll('.tecla');
----------------------------------------------------------------------------------*/

//Criando Funçao-----------------------------------------------------------------
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();

    }
    else {
        console.log ('Elemento nao encontrado ou seletor invalido');
    }
}
/*Criando referencia Individual -> Constante listaDeTeclas = Referencia-----------------*/
const listaDeTeclas = document.querySelectorAll('.tecla');

/*Criar estruturas de repetição (while ou for) e aplicar o atributo onclick de cada 
um dos elementos. */

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//TEMPLATE STRING


    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}




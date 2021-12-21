// funzioni

function cambioColor(cella){
    for(i=0; i < cella.length; i++){
       if (i == 3){
        cella[i].addEventListener("click", function(){
            this.classList.add ("bomba");
        })
       }else{
            cella[i].addEventListener("click", function(){
            this.classList.add ("active");
        })
       }
    }
}


function generatoreNum(cella) {
    let numeroRand = parseInt(Math.floor(Math.random()* cella.length));
    return numeroRand;
}



let tasto = document.getElementById('play');
let campo = document.getElementById('campo');
const posBombe = [];
const bombe = 16;

let quadrato = document.getElementsByClassName('col-1');


// tasto scelta livello 
tasto.addEventListener('click',
function () {
    
    let livelloDiff = diff.options[diff.selectedIndex].value;

    console.log(livelloDiff);

    if (livelloDiff == 1){
        campo.innerHTML = '';
        for (let i = 1; i <= 100; i++){
            console.log(i);

            campo.innerHTML += '<div class="col-1 block d-inline-block" id= "quadrato-' + [i] + '">' + (i) + '</div>';   
        }

        while (posBombe.length < bombe) {
            let numero = generatoreNum(quadrato); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }
        console.log(posBombe);
        cambioColor(quadrato);

    }else if (livelloDiff == 2){
        campo.innerHTML = '';
        for (let i = 1; i <= 81; i++){
        
            console.log(i);
            campo.innerHTML += '<div class="col-1 block block_9 d-inline-block">' + (i) + '</div>';
        }
        while (posBombe.length < bombe) {
            let numero = generatoreNum(quadrato); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }
        console.log(posBombe);
        cambioColor(quadrato);
    }else {
        campo.innerHTML = '';
        for (let i = 1; i <= 49; i++){
            
            console.log(i);
            campo.innerHTML += '<div class="col-1 block block_7 d-inline-block">' + (i) + '</div>';
            
        }
        
        
        while (posBombe.length < bombe) {
            let numero = generatoreNum(quadrato); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }
        console.log(posBombe);
        cambioColor(quadrato);
            
        
        
    }


});





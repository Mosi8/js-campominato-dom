// funzioni

function addClickToBoxes(){

    let cella  = document.getElementsByClassName('col-1');

    for(i=0; i < cella.length; i++){

       cella[i].addEventListener("click", function(){
                const numeroCella = this.innerHTML;
                for (let d = 0; d < posBombe.length; d++){
                    if ( numeroCella == posBombe[d]){
                        this.classList.add('bomba');
                    }else{
                        this.classList.add('active');
                    }
                }

                
        })
      
    }
}


function generatoreNum( maxBombs ) {
    let numeroRand = parseInt(Math.floor(Math.random()* maxBombs ));
    return numeroRand;
}




let tasto = document.getElementById('play');
let campo = document.getElementById('campo');
const posBombe  = [];
const bombe     = 16;




// tasto scelta livello 
tasto.addEventListener('click',
function () {
    
    let livelloDiff = diff.options[diff.selectedIndex].value;

    console.log(livelloDiff);

    if (livelloDiff == 1){
        campo.innerHTML = '';
        for (let i = 1; i <= 100; i++){

            campo.innerHTML += '<div class="col-1 block d-inline-block" id= "quadrato-' + [i] + '">' + (i) + '</div>';   
        }

        while (posBombe.length < bombe) {
            let numero = generatoreNum( 100 ); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }
        console.log(posBombe);
        

    }else if (livelloDiff == 2){
        campo.innerHTML = '';
        for (let i = 1; i <= 81; i++){
        
            campo.innerHTML += '<div class="col-1 block block_9 d-inline-block">' + (i) + '</div>';
        }
        while (posBombe.length < bombe) {
            let numero = generatoreNum( 81 ); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }
        console.log(posBombe);
       
    }else {
        campo.innerHTML = '';
        for (let i = 1; i <= 49; i++){
            
            campo.innerHTML += '<div class="col-1 block block_7 d-inline-block">' + (i) + '</div>';
            
        }
        
        
        while (posBombe.length < bombe) {
            let numero = generatoreNum( 49 ); 
            if (!posBombe.includes(numero))
            posBombe.push(numero);
            
        }          
        
        
    }

    addClickToBoxes()


});





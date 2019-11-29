
let carta = ['Pica', 'Corazon', 'Diamante', 'Trebol'];
let numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


window.onload = function (){
    let random = Math.floor(Math.random() * (carta.length));
    let paloCarta = carta[random];
    random = Math.floor(Math.random() * (numero.length));
    let numeroCarta = numero[random];
    
  switch (paloCarta) {
        case 'Pica':
                
                document.getElementById('cardContain').innerHTML=`<div id="Picas1">
                </div>           
                <div id="numero">
                    <i>${numeroCarta}</i>
                </div>
                <div id="Picas2">     
                </div>`;

            break;

        case 'Corazon':
                
                document.getElementById('cardContain').innerHTML=`<div id="Corazon1">
                </div>           
                <div id="numero">
                    <i>${numeroCarta}</i>
                </div>
                <div id="Corazon2">     
                </div>`;


            break;

        case 'Diamante':
             
                document.getElementById('cardContain').innerHTML=`<div id="Diamante1">
                </div>           
                <div id="numero">
                    <i>${numeroCarta}</i>
                </div>
                <div id="Diamante2">     
                </div>`;

            break;

        case 'Trebol':
                
                document.getElementById('cardContain').innerHTML=`<div id="Trebol1">
                </div>           
                <div id="numero">
                    <i>${numeroCarta}</i>
                </div>
                <div id="Trebol2">     
                </div>`;


            break;  
    }

}



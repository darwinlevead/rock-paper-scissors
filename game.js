function myFunction() {
    let player = document.getElementById("number").value;
    if(+player < 4){
        if(+player === 1){
            player = '🪨';
        } else if(+player === 2){
            player = '📄';
        } else if(+player === 3){
            player = '✂️';
        }
        document.getElementById('player').innerHTML = player
        
        let computer = Math.round((Math.random()*2)+1);
        if(computer === 1){
            computer = '🪨';
        } else if(computer === 2){
            computer = '📄';
        } else if(computer === 3){
            computer = '✂️';
        } else{
            computer = 'Please select again: 🪨📄✂️'
        }
        document.getElementById('computer').innerHTML = computer
        
        if(computer === player){
            document.getElementById('result').innerHTML = 'tie'
        } else if(computer === '🪨' && player === '📄'){
            document.getElementById('result').innerHTML = 'gain'
        } else if(computer === '📄' && player === '✂️'){
            document.getElementById('result').innerHTML = 'gain'
        } else if(computer === '✂️' && player === '🪨'){
            document.getElementById('result').innerHTML = 'gain'
        }else{
            document.getElementById('result').innerHTML = 'lose'
        }
    } else{
        player = 'Please select again: 🪨📄✂️'
        document.getElementById('player').innerHTML = player
        document.getElementById('computer').innerHTML = ' '
        document.getElementById('result').innerHTML = ' '
    }
    
  }
//let player = prompt('Select: 1: 🪨, 2:📄 or 3: ✂️.');

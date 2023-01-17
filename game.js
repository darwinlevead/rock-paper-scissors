let player = prompt('Select: 1: 🪨, 2:📄 or 3: ✂️.');
if(+player === 1){
    player = '🪨';
} else if(+player === 2){
    player = '📄';
} else if(+player === 3){
    player = '✂️';
} else{
    player = 'Please select again: 🪨📄✂️'
}
alert(`You select: ${player}`);

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
alert(`Computer select: ${computer}`);

if(computer === player){
    alert('Tie.')
} else if(computer === '🪨' && player === '📄'){
    alert('You gain.')
} else if(computer === '📄' && player === '✂️'){
    alert('You gain.')
} else if(computer === '✂️' && player === '🪨'){
    alert('You gain.')
}else{
    alert('You lose.')
}
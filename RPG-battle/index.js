const readlineSync = require('readline-sync');
const {monster,estafiy}=require('./heroes');
let randomInt=(n)=>{
    return Math.floor(Math.random()*n)
}
let battle={
    moves:0,   
}

monster.freezedMoves=[];
estafiy.freezedMoves=[]

let monsterMove=()=>{
    let r=randomInt(monster.moves.length)
    
    if(monster.moves[r].cooldown>0){
        monster.freezedMoves.push(monster.moves[r])
    }
    console.log(`Мостр делает ${monster.moves[r].name}`)
}
let estafiyMove=()=>{
    let r=randomInt(estafiy.moves.length)

    if(monster.moves[r].cooldown>0){
        freezedMoves.push(monster.moves[r])
    }
    console.log(`Мостр делает ${monster.moves[r].name}`)
}
const start=()=>{
    monsterMove()
    let userName = readlineSync.question('? ');

}

start();

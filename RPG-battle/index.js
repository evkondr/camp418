const readlineSync = require('readline-sync');
const {monster,estafiy}=require('./heroes');
let randomInt=(n)=>{
    return Math.floor(Math.random()*n)
}
estafiy.availableMoves=[]
let battle={
    moves:0,
    blockedMoves:{
        monster:[],
        estafiy:[]
    },
    availableMoves:{
        monster:[],
        estafiy:[]
    }    
}

let monsterMove=()=>{
    let r=randomInt(monster.moves.length)
    
    if(monster.moves[r].cooldown>0){
        monster.freezedMoves.push(monster.moves[r])
    }
    console.log(`Мостр делает ${monster.moves[r].name}`)
}
let estafiyMoves=(moveName)=>{
    let availableMoves=[];
    for(let i=0;i<estafiy.moves.length;i++){
        if(moveName==estafiy.moves[i].name){
            return estafiy.moves[i]
        }
    }
}
estafiy.moves.forEach(item=>{estafiy.availableMoves.push(item.name)})
const start=()=>{
   
    let index = readlineSync.keyInSelect(estafiy.availableMoves, 'Which move?');
    let move=estafiyMoves(estafiy.availableMoves[index]);
    
    console.log(move)
}

start();

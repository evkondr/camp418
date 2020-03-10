const readlineSync = require('readline-sync');
const {monster,estafiy}=require('./heroes');
let randomInt=(n)=>{
    return Math.floor(Math.random()*n)
}
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
let estafiyMoves=()=>{
    for(let i=0;i<estafiy.moves.length;i++){
        if(!battle.blockedMoves.estafiy.find(estafiy.moves[i])){
            battle.availableMoves.estafiy.push(estafiy.moves[i].name)
        }else{
            battle.availableMoves.estafiy.find()
        }
    }
    
}
const start=()=>{
    monsterMove()
    estafiyMoves()
    index = readlineSync.keyInSelect(animals, 'Which move?');

    console.log()
}

start();

const readlineSync = require('readline-sync');
const {monster,estafiy}=require('./heroes');
let randomInt=(n)=>{
    return Math.floor(Math.random()*n)
}
estafiy.availableMoves=[]
estafiy.blockedMoves=[]
monster.availableMoves=[]
monster.blockedMoves=[]

let monsterMove=()=>{
    let r=randomInt(monster.moves.length)
    
    if(monster.moves[r].cooldown>0){
        monster.freezedMoves.push(monster.moves[r])
    }
    console.log(`Мостр делает ${monster.moves[r].name}`)
}
let estafiyMoves=(moveName)=>{
    for(let i=0;i<estafiy.moves.length;i++){
        if(moveName==estafiy.moves[i].name){
            return estafiy.moves[i]
        }
    }
}
function deleteFromAvailable(moveName){
     let index=this.availableMoves.indexOf(moveName);
     this.availableMoves.splice(index,1)
}
function deleteFromBlocked(){
    if(this.blockedMoves.length>0){
        this.blockedMoves.forEach((item,index)=>{
            console.log(item.name, item.cooldown)
            if(item.cooldown===0){
                this.blockedMoves.splice(index,1)
                this.availableMoves.push(item.name);
            }
            item.cooldown--
        })
    }
}
estafiy.moves.forEach(item=>{estafiy.availableMoves.push(item.name)})
monster.moves.forEach(item=>{monster.availableMoves.push(item.name)})

const start=()=>{
    deleteFromBlocked.call(estafiy)

    let index = readlineSync.keyInSelect(estafiy.availableMoves, `Чем ответит ${estafiy.name}`);
    let move=estafiyMoves(estafiy.availableMoves[index]);
    if(move.cooldown>0){
        estafiy.blockedMoves.push({name:move.name,cooldown:move.cooldown});
        deleteFromAvailable.call(estafiy, move.name)
    }

    // console.log(estafiy.blockedMoves)
    start()
}

start();

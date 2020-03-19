const readlineSync = require('readline-sync');
const field=[[0,0,0],[0,0,0],[0,0,0]]

const checkWin=(num)=>{
    //строки
    if(field[0][0]==num && field[0][1]==num && field[0][2]==num)return true
    if(field[1][0]==num && field[1][1]==num && field[1][2]==num)return true
    if(field[2][2]==num && field[2][2]==num && field[2][2]==num)return true
    //столюцы
    if(field[0][0]==num && field[1][0]==num && field[2][0]==num)return true
    if(field[0][1]==num && field[1][1]==num && field[2][1]==num)return true
    if(field[0][2]==num && field[1][2]==num && field[2][2]==num)return true

}
const move=(player, num)=>{
    let [row,cell]=player.split(',');
    field[row-1][cell-1]=num;
    
}
function start(){
    console.log('\r\n')
    console.log(`Поле ${field.join(' | ')}`)
    console.log('**********')
    //Игрок 1
    let player1=readlineSync.question('Игрок 1, введите ячейку: \r\n').toString();
    move(player1,1)
    if(checkWin(1)){
        console.log("Игрок 1 победил")
        console.log(`Поле ${field.join(' | ')}`)
        return
    }
    //Конец хода
    console.log(`Поле ${field.join(' | ')}`)
    console.log('**********')
    //Игрок 2

    let player2=readlineSync.question('Игрок 2, введите ячейку: \r\n\').toString()');
    move(player2,2)
    start()
}

start()
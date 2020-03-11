const readlineSync = require('readline-sync');


let attempts=3; //Количество попыток
// Функция получения числа
const genNumber=()=>{
    let theNumber='';
    let numRange=Math.floor(3+Math.random()*4) //Число от 4 до 6 разрядов
    for(let i=0;i<numRange;i++){
        let newN=randomInt();
        if(theNumber.indexOf(newN)>=0){        //елси такое число уже есть в строке
            while(theNumber.indexOf(newN)>=0){ //генерировать пока такое число есть в строке
                newN=randomInt();
            }
        }
        theNumber+=newN
    }
    return theNumber;
}
//Функция генерация целого числа 
const randomInt=()=>{
    let num=Math.floor(Math.random()*10)
    return num.toString()
}
//Функция сравнения двух чисел
const compare=(num1,num2)=>{
    let inplace=[];
    let outplace=[];
    for(let i=0; i<num2.length; i++){
        
        let char=num2[i]
        if(num1.indexOf(char)>=0){
            if(num1.indexOf(char)==num2.indexOf(char)){
                inplace.push(char)
            }else{
                outplace.push(char)
            }
        }
    }
    return `совпавших цифр не на своих местах - ${outplace.length} (${outplace.join(', ')}), цифр на своих местах - ${inplace.length} (${inplace.join(', ')}). Число программы ${num1}, Число юзера ${num2}`
}

const start=()=>{
    let compNum=genNumber();
    const userNumber = readlineSync.question(`Введите число из ${compNum.length} различающихся цифр, и нажмите ENTER \n`);
    if(userNumber==compNum)return console.log('Число угадано!');
    if(attempts>0){
        console.log(compare(compNum, userNumber));
        attempts--;
        console.log(`Количество оставшихся попыток: ${attempts}`);
        start()
    }
    else{
        console.log('Вы не угадали')
    }
}
//let's play
start()





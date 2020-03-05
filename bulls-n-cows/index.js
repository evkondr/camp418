const readlineSync = require('readline-sync');


let attempts=3;

const genNumber=()=>{
    let theNumber='';
    let numRange=Math.floor(3+Math.random()*4)//min 3, max 6
    for(let i=0;i<numRange;i++){
        let newN=randomInt();
        if(theNumber.indexOf(newN)>=0){
            while(theNumber.indexOf(newN)>=0){
                newN=randomInt();
            }
        }
        theNumber+=newN
    }
    return theNumber;
}
const randomInt=()=>{
    let num=Math.floor(Math.random()*10)
    return num.toString()
}
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
    console.log(compNum)
    const userNumber = readlineSync.question(`Введите число из ${compNum.length} различающихся цифр, и нажмите ENTER`);
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





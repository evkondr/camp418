const fs = require('fs');
const readlineSync = require('readline-sync');

const qFolder = './questions';      //Директория с вопросами
let questions=5;                    //Количество вопросов
let files=fs.readdirSync(qFolder)   //Список файлов в директории

//Функиця генерирует массив из случайных неповторяющихся файлов
const genArrOfFiles=()=>{
    let max=files.length;
    let arr=[];
    for(let i=0;i<questions;i++){
        let index=Math.floor(Math.random()*max)
        if(arr.indexOf(files[index])>=0){
            while(arr.indexOf(files[index])>=0){
                index=Math.floor(Math.random()*max) //Продолжать генерировать число, пока есть совпадения в массиве 
            }
        }
        arr.push(files[index])                      //Если слвпадение нет, поместить имя файла в массив
    }
    return arr
}
//Эта фунция создает массив из вопросов в  виде объектов 
const prepareQuiz=()=>{
    let questions=[]
    let files=genArrOfFiles();
    for(let i=0;i<files.length;i++){
        try {
            let data = fs.readFileSync(qFolder+'/'+files[i], 'utf8') //Получаем содержимое файла
            let [question,answer,...rest]=data.split('\r\n');        //С помощью диструкторизации получаем переменные по строкам
            questions.push({                                         //Передаем в массив с вопросами объекты со свойствами из переменных
                question,
                answer,
                rest
            })
        } catch (err) {
            console.error(err)
        }
    }
    return questions
}
const start=()=>{
    let questions=prepareQuiz();                                        
    let wrong=0,correct=0
    questions.forEach(item=>{                                           //Для каждого эл-та массива
        console.log('\n***** Вопрос *****')                             //Вывести разделитель
        let index = readlineSync.keyInSelect(item.rest, item.question); //получить индекс массива rest
        (+index+1)==item.answer?correct++:wrong++                       //к  индексу прибавить 1 чтобы получить номер ответа
    })
    console.log(`Правильных ответов: ${correct}, неправильных: ${wrong}`)
}

start()



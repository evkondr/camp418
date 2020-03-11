const fs = require('fs');
const qFolder = './questions';

let files=fs.readdirSync(qFolder)

try {
    const data = fs.readFileSync(qFolder+'/'+files[0], 'utf8')
    let arr = data.split('\r\n')
    console.log(arr)
} catch (err) {
    console.error(err)
}



// fs.readFileSync(qFolder+'/'+files[0], 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
    
//     console.log(arr)
//   })

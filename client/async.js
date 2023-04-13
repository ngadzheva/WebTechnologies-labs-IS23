// for (var i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 1000);
// }

// console.log('DONE');

const fs = require('fs');

let result = '';

const editFn = data => data.replace(/00/g, '44');

// fs.readFile('students.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     // result = data;

//     console.log('Reading file DONE')

//     result = editFn(data);
//     console.log('Editing DONE: ', result)

//     fs.writeFile('editedStudents.txt', result, 'utf-8', (error) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
    
//         console.log('Writing file DONE')

//         fs.readFile('editedStudents.txt', 'utf-8', (error, data) => {
//             if (error) {

//             }


//         })
//     })
// });

// console.log('DONE')

const read = (path, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        })
    })
}

const write = (path, data, encoding) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, encoding, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        })
    })
}

// read('students.txt', 'utf-8')
//     .then(data => editFn(data))
//     .then(editedData => write('promisedEditedStudents.txt', editedData, 'utf-8'))
//     .then(() => console.log('DONE'))
//     .catch(error => console.error(error))

async function processFiles() {
    
        result = await read('tudents.txt', 'utf-8');

        result = editFn(result);

        await write('asyncEditedStudents.txt', result, 'utf-8');

        console.log('DONE')
    
}

processFiles()
    // .then(() => console.log('Files processing DONE'))
    // .catch(error => console.log(error))
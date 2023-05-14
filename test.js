// const dt = require('./data.json')
// const fs = require('fs')
// let sorted_data = Object.values(dt)
//     // .slice(0, 2)
// console.log(sorted_data.length);
// fs.writeFile('newData.json', JSON.stringify(sorted_data), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


const db = async () => {
    const data = await fetch('http://localhost:5000')
    console.log(await data.json());
}
db()
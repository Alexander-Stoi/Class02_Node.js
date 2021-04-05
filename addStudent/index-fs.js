const fs = require(`fs`);
// console.log(`Started writing....`, Date.now())
// fs.writeFileSync(`text.txt`, `This is a test`);
// console.log(`After the date has been written`, Date.now());

// fs.writeFile(`test1.txt`, `Async test`, err => {
//     if (err) throw err;

//     console.log(`Data written to file`, Date.now());
// })

// console.log(`After the data is written to file, async`, Date.now());

// const data = fs.readFileSync(`text.txt`);

// console.log(data);

fs.readFile(`text.txt`, (err, data) => {
    if (err) throw err;

    console.log(data);
})

console.log(`This is after the reading of the file`)
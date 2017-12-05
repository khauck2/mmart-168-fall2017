const sheets = new Sheets({
    key: '1_rqfhPWtk7wAzUTEyC-rhmROMTQZVecvFymbXgrrywE',
    query: 'select E, count(A) group by E'
});

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    data.records.forEach(record => {
        console.log(record)
    })
});

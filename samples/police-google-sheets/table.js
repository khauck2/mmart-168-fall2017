const sheets = new Sheets({
    key: '1_rqfhPWtk7wAzUTEyC-rhmROMTQZVecvFymbXgrrywE'
});

sheets.getData(data => {
    //loop through records and output to the screen:
    console.log(data)
    let num = 1
    data.records.forEach(record => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = num
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.day
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.jan
        tr.appendChild(td)



        td = document.createElement('td')
        td.innerHTML = record.feb
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.mar
        tr.appendChild(td)



        //
        document.querySelector('#content tbody').appendChild(tr)
        ++num
    })
});

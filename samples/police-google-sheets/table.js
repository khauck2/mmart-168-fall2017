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
        td.innerHTML = record.gender
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.race
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = eval('new ' + record.date_cleaned).toDateString()
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.st_
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = record.killed_by
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '<a href="' + record.news_link + '">More Info...</a>'
        tr.appendChild(td)

        //
        document.querySelector('#content tbody').appendChild(tr)
        ++num
    })
});

const apiKey = 'YYZB-68D5-QMHQ-Y6MI'
//YYZB-68D5-QMHQ-Y6MI this is Karin's key
//original key is MW9S-E7SL-26DU-VV8V
//it's like an api login
//first ? and after that &s
//this is a really random change
///try a completely new post Thanksgiving change
//Monday after Thanksgiving
//same day - testing new install during office hours monday

const makeStationList = () => {
  //url that asks the question you want to be answered. In this case, give me
  //a list of all of the BART stations
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
    //fetch is a built-in java script method
    //first it's going to go out and get some data associated with the url
    //after it returns return response. json, Sarah says she doesn't fully
    //understand it but it's a convention
        .then((response) => {
            return response.json()
        })
        .then((json) => {
          //do something cool with your data
            json = json.root
            //console.log(json) [old]

            //console.log(json.stations.station)
            //Now instead of printing out the whole object,
            //it will just print out an array.
            /*
            //what if we only wanted the first three to print?
            console.log(json.stations.station[0])
            console.log(json.stations.station[1])
            console.log(json.stations.station[2])
            //if we didn't want to ask for each one at a time.
            */
            //what if we wanted each of those by NAME?
            /*console.log(json.stations.station[0].name)
            console.log(json.stations.station[1].name)
            console.log(json.stations.station[2].name)
            */
            //how do I print out, in a simple way, all 46 stations?
            //answer: do a loop -- Steve: for loop
            //Karin - a while loop
            //Sarah - the 'for each' loop which is a new
            // first we could create a const called station Instead
            //of saying stations.station, which is weird to Sarah.
            //const stations = json.stations.station
            //now can replace everyhwere that says stations.station with sations
            //now the for loop
            /*for (let i = 0; i < stations.length; i++)
            console.log(stations[i].name)*/
            //the above worked great. Or we could have:
            //stations.forEach((station) => {
              //console.log(station.name)
              //one nice thing about the forEach is that you don't have to worry
              //about all the i++ stuff, you can just loop through the array,
              //and access the individual element
              //you could also replace both instances of "station" with "wheeee"
              //and it would still work.It just refers to each individual
              //element in the array
              //or you could even do:
              //on line 15 and 16
              json.stations.station.forEach((station) => {
                //1. Create the element you want to add to the DOM.
                console.log(json)
                const option = document.createElement("option")

                //2. Assign data some part of the element. (Below are two
                //properties of the same element that
                //we just created, "option" above.
                //If you DIDN'T have the 2 lines below,
                //when you inspect you'd have empty options in inspect element.

                option.innerHTML = station.name
                //this one means "fill the html tag with station names"
                //you can see it in "inspect element" in the console
                option.value = station.abbr
                //the value is an attribute like src
                //you can see also, the option now has a value
                //they have to be legal attributes, e.g. GTFS_latitude
                //value means something, but you could call it Steve
                //people load up the DOM with all kinds of hidden info

                //3. Append the newly created element to the DOM somewhere.
                //Here we are appending it to the station_list,
                //(append option to to the ID station_list)
                //which is a SELECT element (see HTML).
                document.getElementById('station_list').appendChild(option)
                //how to list all the stations.

                /*const option = document.createElement ("option")
                //this is an empty element, not attached to anything
                //step 1) create the option element
                //step 2 - set the option tag's innerHTML to = the station NAME
                option.innerHTML = station.name
                //step 3, append the option to the actual selects
                document.getElementById('station_list').appendChild(option)
                //just commented out const option through appendChild(option)
                //to try something else
                //this will be making each station name a div or paragraph
                //const paragraph = document.createElement("p")
                //any tag can go within the quotes, for example
                //const li = document.createElement("li")
                //li.innerHTML = station.NAME
                //document.getElementById('results').appendChild(li)
                //paragraph.innerHTML = station.name
                //where do we want to add the p, how about to results (looks at html)
                //document.getElementById('results').appendChild(paragraph)
                //note - I am not following this part -- argh!*/

              })


            //How do I use the data returned from BART to populate
            //my dropdown menu? How do we connect the api data to the
            //html/DOM display? we need to drill down to json.station.stations
            //to get to the array.

            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            //const option = document.createElement("option")
            //option.value = station.name
            //option.innerHTML = station.abbr
            //document.getElementById('station_list').appendChild(option1)
            //see the select tag in the index.html, we need to build
            //our all of the options
        })
        .catch((err) => {
            console.log(err)
        })
}


















const getArrivalTimes = () => {
  //go out an look for the element with the ID staionList – which is in the
  //HTML lines 9-15 and which is a select element -- and store it in a
  //variable called stationList.
  //Every time the user makes a change, it fires the function
  //Then it's printing the value associated with the selected list item
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = stationList.value
    //replaced 'DBRK' above with stationList.value
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
        //replaced NBERK above with bartStationCode
    fetch(url)
        .then((response) => {
            return response.json()
          })
        .then((json) => {
            json = json.root
          //she changed this up several times (above) around 43:00

//remember, the three steps are:
//1. clear out the old results eg div to put in new - this is one way - see Zoom 42:15 and 47:42
            document.getElementById('results').innerHTML = ""
//2. add header that shows selected station name
            const header = document.createElement("h2")
            header.innerHTML = json.station[0].name
            document.getElementById('results').appendChild(header)
//3. log all of the train lines
            json.station[0].etd.forEach((line) => {
              console.log('Line: ', line)
              //and show on screen (name something descriptive):
              const trainLine = document.createElement("p")
              trainLine.innerHTML = line.destination
              document.getElementById('results').appendChild(trainLine)
              //now we'll have to make another for loop to print out times
  //4. Log all the estimates for each train line (need to do a loop within a loop)
              line.estimate.forEach((estimate) => {
                console.log('Estimate: ', estimate)
                const departureTime = document.createElement("span")
                //the nice thing about spans is that they're "in line
                //you can stack them next to each other
                departureTime.innerHTML = estimate.minutes
                if (estimate.delay !== '0') {
                  departureTime.innerHTML += "!delayed!"

                }
                departureTime.style.background = estimate.hexcolor
                document.getElementById('results').appendChild(departureTime)
              })
            })



//all these h2s were divs at first

            /*const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
            */
        })
//deleted the error catch 3 lines  - llater you might want it to say
//something like "the server is down"
}

makeStationList()
//this is so important, it runs the whole thing

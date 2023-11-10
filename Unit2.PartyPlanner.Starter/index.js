console.log('loaded')

// https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-pt-web-pt-b/events
const rootLink = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-pt-web-pt-b`

// event (Model) => {id:unique, name:string, location:number, date:Datetime, description:string}

// get /events => get all tweets multiple [events...]
// when page loads, show events
// fetch data from server (via api)
    // loading UI
    // error handling
// add this data to state when successful
// render() - how do i connect state to UI ✔ 
// UI ONLY html css (no js) how do u want it to look ✔ 

const initialState = {
    events: []
}

const state = initialState


const fetchEvents = async () => {
    console.log('fetching')

    // fetch by default does a get request
    let res =  await fetch(`${rootLink}/events`)

    let data = await res.json()
    let events = data.data

    console.log(events)
    console.log('data:', data)
    console.log(res) // what am i expecting here

    // every time i render state, 
    state.events = events // puts the data in the state array
    render()
}

const handleClicked = (id) => {
    console.log({id})
    fetch(`${rootLink}/events`)
}

const renderEvents = ()=> {
    console.log('renderrrr')
    let eventHTMLString = ''
    let eventsHTML = document.getElementById('events')
    state.events.forEach( event => {
eventHTMLString += `
    <div class="event">
            <h1>${event.name}</h1>
            <p>${event.description}</p>
            <p>${event.date}</p>
            <p>${event.location}</p>
       </div>
    `})
    eventsHTML.innerHTML = eventHTMLString
}

renderEvents()

// don't want to log, wqnt to render
const render = () => [
    renderEvents()
]

// render()

const init = () => {
    fetchEvents()
    renderEvents()
}

init()


// get /events/:id = get one tweet {events}




// delete /events/:id = delete tweet {events}





// post /events/ + {?}=> creates an events {events}





// put  /events/:id + {?} = updates events
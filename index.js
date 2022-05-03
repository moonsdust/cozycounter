let countElem = document.getElementById("count")
let saveElem = document.getElementById("save")
let counter = 0 // intialize the counter as 0

function increment(){
    counter += 1
    countElem.innerText = counter
}

function save(){
    let sentence = counter + ' - '
    // do textContent to keep the spaces in string when you do += 
    //saveEl.innerText += sentence
    saveElem.textContent += sentence

    counter = 0 // restarts counter to 0 
    countElem.innerText = counter // makes 0 show up again after count is saved
}
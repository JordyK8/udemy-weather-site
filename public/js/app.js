const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    // Preventing the browser from refreshing automaticly
    e.preventDefault()
    if(search.value){
        const location =  search.value
        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''
        fetch(`http://localhost:3000/weather?address=${location}`)
    
        .then((res) => {
            res.json()
            .then((data) => {
                if(data.error){
                    return messageOne.textContent = data.error
                }
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            })
        })
    } else{
    messageOne.textContent = 'Please enter a location'
    }
})
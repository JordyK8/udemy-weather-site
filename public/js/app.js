const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherImage = document.querySelector('#weatherImage')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    // Preventing the browser from refreshing automaticly
    e.preventDefault()
    if(search.value){
        const location =  search.value

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''
        weatherImage.src = ''  

        fetch(`/weather?address=${location}`)
        .then((res) => {
            res.json()
            .then((data) => {
                if(data.error){
                    return messageOne.textContent = data.error
                }
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                weatherImage.src = data.icon      
            })
        })
    } else{
    messageOne.textContent = 'Please enter a location'
    }
})
const request = require('postman-request');

const forecast = (lat, long, callback) =>{
    const url = `http://api.weatherstack.com/current?access_key=880d948290d2f85e798f6432a10b917c&query=${long},${lat}`
    request({url, json:true}, (err, { body } = {})=>{
        if(err){
            callback('Something went wrong!', undefined);
        } else if(body.error){
            callback('Could not find your query, plese try again.', undefined);
        } else{
            callback(undefined, `Todays weather is: ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out. There is a ${body.current.precip}% chance of rain.`)
        }
    })
}
module.exports = forecast;
function loading() { 

var msg = document.getElementById('msg')
var img = document.getElementById('image')
var header = document.querySelector('header') //Sellect the header element
var footer = document.querySelector('footer') //Sellect the footer element
var date = new Date()
var hour = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()


msg.innerHTML = `The current time is: ${hour}:${minutes}:${seconds}`

if(hour >= 6 && hour < 12) {
    //Good Morning!
    document.body.style.background = '#e2cd9f'
    header.style.color = 'black'
    footer.style.color = 'red'
    
} else if (hour >= 12 && hour < 18) {
    //Good Afternoon
    img.src='images/afternoon.jpg'
    document.body.style.background = '#b9846f'
    header.style.color = 'black'
    footer.style.color = 'black'
} else if (hour >= 18 && hour < 24) {
    //Good Evening!
    img.src='images/evening.jpg'
    document.body.style.background = '#133850'
    header.style.color = 'white'
    footer.style.color = 'white'
} else {
    //Good Night!
    img.src='images/night.jpg'
    document.body.style.background = '#181A1B'
    header.style.color = 'orange'
    footer.style.color = 'orange'
}
}
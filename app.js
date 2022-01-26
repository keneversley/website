// var myFunctionbtn = document.querySelector("#myFunction");

function myFunction() {
    var username = prompt("What is your name?");
    alert ("Hello, " + username + " nice to see you!");
   
    }
  
    setInterval(() => {
        d = new Date(); //object of date()
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        hr_rotation = 30 * hr + min / 2; //converting current time
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;
    
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);

    // WEATHER

    var searchBtn = document.querySelector('#searchbtn');
searchbtn.addEventListener('click', function(event) {
    var search = document.querySelector('#searchinput').value;
    fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q='+ search +'&appid=2fa1434af29e0e9fa3a04760d43111ce&units=imperial') 

.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    document.querySelector('#searchresults').textContent =data.main.temp;
}) 

})
const API_Key = `59e6663c810bde6bb691cdd618416284`
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
// const Img_url = `http://openweathermap.org/img/wn/10d@2x.png`

const form = document.querySelector("form");
const serach = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather =async (city)=>{
    // weather.innerHTML = `<h3>loading...</h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
   return showWeather(data);
}

const showWeather = (data)=>{
    if(data.cod == 404){
        weather.innerHTML = `<h3>city not found</h3>`
        return;
    }
    // console.log(data);
    weather.innerHTML = `
    <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
     <div>
        <h3>${data.main.temp }°C </h3>
        <h4 style ="color:#546de5" >${data.weather[0].main}</h4>
    </div> `
  

}

form.addEventListener("submit", function(e){
    getWeather(search.value)
    e.preventDefault()

})
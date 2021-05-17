import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Weather5days from "./components/Weather5days";


class App extends React.Component {
  
  state = {
    temperature: undefined,
    mode:1,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    pressure:undefined,
    icon:undefined,
    feels_like:undefined,
    wind:undefined,
    report5days:undefined,
  }
  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(this.state.mode===1)
    {
    const api_call = await fetch(`https://thingproxy.freeboard.io/fetch/http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c0d573b18729da9019711dcbacf8458d`);
    const data = await api_call.json();
    console.log(data);
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon:data.weather[0].main,
        feels_like:data.main.feels_like,
        wind:data.wind.speed,
        pressure:data.main.pressure,
        error: "",
        report5days:[],
        mode:1
      });
      console.log(data.weather[0].main);
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        icon:undefined,
        description: undefined,
        pressure:undefined,
        wind:undefined,
        feels_like:undefined,
        report5days:[],
        error: "Please enter the City Name.",
      });
    }
  }
  else{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=c0d573b18729da9019711dcbacf8458d`);
    const data = await api_call.json();
    if(city) 
    {
      var mappedData = [
        {
            temperature: data.list[4].main.temp,
            date:new Date(data.list[4].dt*1000).toLocaleDateString("en-GB"),
            description:data.list[4].weather[0].main,
            icon:data.list[4].weather[0].main,
          },
          {
            temperature: data.list[12].main.temp,
            date:new Date(data.list[12].dt*1000).toLocaleDateString("en-GB"),
            description:data.list[12].weather[0].main,
            icon:data.list[12].weather[0].main,
          },
          {
            temperature: data.list[20].main.temp,
            date: new Date(data.list[20].dt*1000).toLocaleDateString("en-GB"),
            description:data.list[20].weather[0].main,
            icon:data.list[20].weather[0].main,
          },
          {
            temperature: data.list[28].main.temp,
            date: new Date(data.list[28].dt*1000).toLocaleDateString("en-GB"),
            description:data.list[28].weather[0].main,
            icon:data.list[28].weather[0].main,
          },
          {
            temperature: data.list[36].main.temp,
            date:new Date(data.list[36].dt*1000).toLocaleDateString("en-GB"),
            description:data.list[36].weather[0].main,
            icon:data.list[36].weather[0].main,
          },
        ];
        this.setState({
          report5days:mappedData,
          mode:0
        })
        console.log(this.state.report5days);
    }else{
      this.setState({
        error:"Please enter the City Name."
      })
    }
  }
}
  changeModeto0=()=>{
    this.setState({mode:0})
  }
  changeModeto1=()=>{
    this.setState({mode:1})
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} 
                  changeModeto1={this.changeModeto1}
                  changeModeto0={this.changeModeto0}/>
                  {
                   this.state.mode>0 &&  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    wind={this.state.wind}
                    pressure={this.state.pressure}
                    feels_like={this.state.feels_like}
                    icon={this.state.icon}
                  />
                  }
                  {
                    this.state.mode===0 && <Weather5days 
                  report5days={this.state.report5days}
                  error={this.state.error}
                  />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;

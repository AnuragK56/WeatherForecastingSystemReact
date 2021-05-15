import React from "react";

const Weather5days = props => (
	<div className="weather__info_2">
		<p className="weather__key"> Date &nbsp;&nbsp;&nbsp;&nbsp;Temperature &nbsp;&nbsp;&nbsp;&nbsp; Conditions <span></span></p>

		{props.report5days.map((weather)=>(
		<div>
		<p className="weather__key">
		{ weather.date }&nbsp;&nbsp;&nbsp;&nbsp;{ weather.temperature }°C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ weather.description } 
		{	
	 	 weather.icon==="Snow" && <img className="weather__icon_2" src={require('../img/Snow.png')}></img>
	 	}
		{	
	 	 weather.icon==="Clouds" && <img className="weather__icon_2" src={require('../img/Clouds.png')}></img>
		}
		{	
			weather.icon==="Drizzle" && <img className="weather__icon_2" src={require('../img/Drizzle.png')}></img>
		}
		{	
			weather.icon==="Haze" && <img className="weather__icon_2" src={require('../img/Haze.png')}></img>
		}
		{	
			weather.icon==="Rain" && <img  className="weather__icon_2" src={require('../img/Rain.png')}></img>
		}
		{	
			weather.icon==="Thunderstorm" && <img  className="weather__icon_2" src={require('../img/Snow.png')}></img>
		}
		{	
			weather.icon==="Clear" && <img  className="weather__icon_2" src={require('../img/Clear.png')}></img>
		}
	</p>
	
	</div>
		))}
		 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather5days;
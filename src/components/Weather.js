import React from "react";

const Weather = props => (
	<div className="weather__info">
		{	
	 	 props.icon==="Snow" && <img className="weather__icon" alt="Icon" src={require('../img/Snow.png')}></img>
	 	}
		{	
	 	 props.icon==="Clouds" && <img className="weather__icon" alt="Icon" src={require('../img/Clouds.png')}></img>
		}
		{	
			props.icon==="Drizzle" && <img className="weather__icon" alt="Icon" src={require('../img/Drizzle.png')}></img>
		}
		{	
			props.icon==="Haze" && <img className="weather__icon" alt="Icon" src={require('../img/Haze.png')}></img>
		}
		{	
			props.icon==="Rain" && <img  className="weather__icon" alt="Icon" src={require('../img/Rain.png')}></img>
		}
		{	
			props.icon==="Thunderstorm" && <img  className="weather__icon" alt="Icon" src={require('../img/Snow.png')}></img>
		}
		{	
			props.icon==="Clear" && <img  className="weather__icon" alt="Icon" src={require('../img/Clear.png')}></img>
		}
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }°C	</span>
	 	</p> 
	 }
	 	 { 	
	 	props.feels_like && <p className="weather__key"> Feels like: 
	 		<span className="weather__value"> { props.feels_like }°C </span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity }% </span>
	 	</p> 
	 }
	 { 	
	 	props.pressure && <p className="weather__key"> Pressure: 
	 		<span className="weather__value"> { props.pressure } hPa</span>
	 	</p> 
	 }
	 { 	
	 	props.wind && <p className="weather__key"> Speed: 
	 		<span className="weather__value"> { props.wind }m/s</span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;
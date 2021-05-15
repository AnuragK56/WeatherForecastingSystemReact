import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<button onClick={props.changeModeto1}>Get Current Weather</button>	
		<button onClick={props.changeModeto0} >Get 5days Weather</button>
	</form>
);

export default Form;
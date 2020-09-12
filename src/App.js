import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//stylesheet import
import "./App.scss";

//components import
import HouseSelect from "./components/houses/HouseSelect";
import RangeSlider from "./components/rangeslider/RangeSlider";

//image import
import logo from './assets/nock-nock-logo-wht.png';
import sideImg from './assets/Group 36.png';


const App = () => {
	const [completed, setComplete] = useState([20, 40]);
	return (
		<div className="App">
    <img className="App-logo" src={logo} alt="logo"/>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={()=><HouseSelect completed={completed[0]}/>} />
					<Route path="/range" component={()=><RangeSlider completed={completed[1]}/>} />
				</Switch>
			</BrowserRouter>
      <img className="App-decor-img" src={sideImg} alt="decorative img"/>
		</div>
	);
};

export default App;

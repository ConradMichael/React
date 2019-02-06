import React, { Component } from 'react';
import Back from "./TrainerManager/Back.js";
import SkillsTable from "./TrainerManager/SkillsTable.js";
import Navigation from "./TrainerManager/Navigation.js";
import './Trainer.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			Header: "Logo"
		}
	}
  render() {
    return (
		<div class="mainBody">
			<h1 class="logo"> {this.state.Header} </h1>
			<Navigation/>
			<SkillsTable/>
			<Back/>
		</div>
    );
  }
}


  
export default App;

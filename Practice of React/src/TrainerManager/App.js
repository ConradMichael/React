import React, { Component } from 'react';
import Back from "./TrainerManager/Back.js";
import SkillsTable from "./TrainerManager/SkillsTable.js";
import Navigation from "./TrainerManager/Navigation.js";

class App extends Component {
  render() {
    return (
		<div>
			<Navigation/>
			<SkillsTable/>
			<Back/>
		</div>
    );
  }
}



export default App;

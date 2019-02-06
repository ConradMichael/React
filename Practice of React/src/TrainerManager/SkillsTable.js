import React, { Component } from 'react';
import '../Trainer.css';

class SkillsTable extends Component {
	render() {
		return (
		<div class="trainerMain">
			Trainer:
			<table class="skillsTable">
				<tr>
					<th>ID:</th>
					<th>Name:</th>
					<th>Skills:</th>
				</tr>			
				<tr>
					<td>1</td>
					<td>Trainer Name</td>
					<td>None</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Trainer Name</td>
					<td>None</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Trainer Name</td>
					<td>None</td>
				</tr>
			</table>
		</div>
    );
  }
}


export default SkillsTable;

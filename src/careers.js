import React, { Component } from 'react';
//import uuid from 'uuid';


var roles = [
	{
		title: 'Product Manager',
		duties: 'Responsible for strategizing, roadmapping, and defining for a product or product line. The position may require these skills: marketing, forecasting, and profit and loss (P&L) responsibilities.  Product Manager provides cross-functional leadership and bridges organizational gaps between different functional groups — most often between engineering, marketing, sales, and support.',
		salary: 'USD: $82,000 a year',
		majors: 'psychology, sociology'

	}
]

class Careers extends Component{
	render(){
		return(            

			<div>
				<h1 className = 'page-title'> Find Your Calling </h1>
					<ul className = 'roles'>
						{
							roles.map((r) => (<li key={r.title} >{r.title}</li>))
						}
					</ul>
			</div>
		)
	}
}

export default Careers;
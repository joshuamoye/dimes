var React = require('react');
var NavLink = require ('react-router-dom').NavLink;

var React = require('react');
var NavLink = require ('react-router-dom').NavLink;

function Nav (){
	return(
		<ul className= 'nav'>
			<li>
				<NavLink exact activeClassName= 'active' to = '/'>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName= 'active' to = '/careers'>
					Careers
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName= 'active' to = '/resources'>
					resources
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName= 'active' to = '/contact'>
					Contact
				</NavLink>
			</li>

		</ul>
		)

}

module.exports = Nav;

 // <div className 'container'>
 //            <ul className = 'navbar' >
 //              <a href="#home-page">Home</a>
 //              <a href="#careers">Careers</a>
 //              <a href="#resources">Resources</a>
 //              <a href="#contact">Contact</a>

 //            </ul>
 // </div>
import { Component } from "react";
import classes from "./User.module.css";

/* 
imported "Component" adds additional functionality & a couple of important properties, for example "props" property.
*/
class User extends Component {
	render() {
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

/* // Functional Component
  const User = (props) => {
	return <li className={classes.user}>{props.name}</li>;
}; 
*/

export default User;

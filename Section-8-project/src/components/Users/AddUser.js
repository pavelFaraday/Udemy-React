import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card cssClass={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" />
				<label htmlFor="age">Age </label>
				<input id="age" type="text" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;

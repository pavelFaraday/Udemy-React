import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			enteredUserName.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: "Invali Input",
				message: "Please entere something!",
			});
			return;
		}
		// example: var x = +'11.5' + +'3.5'
		// (+) --- we are forcing string to be a number
		if (+enteredAge < 1) {
			setError({
				title: "Invali Age",
				message: "Age should not be bellow the 1!",
			});
			return;
		}
		props.onAddUser(enteredUserName, enteredAge);
		setEnteredUserName("");
		setEnteredAge("");
	};

	const userChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUserName}
						onChange={userChangeHandler}
					/>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;

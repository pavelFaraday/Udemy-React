import React, { useState, useRef } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (
			enteredName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invali Input",
				message: "Please entere something!",
			});
			return;
		}
		// example: var x = +'11.5' + +'3.5'
		// (+) --- we are forcing string to be a number
		if (+enteredUserAge < 1) {
			setError({
				title: "Invali Age",
				message: "Age should not be bellow the 1!",
			});
			return;
		}
		props.onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		// <React.Fragment> === <></>
		<React.Fragment>
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
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
};

export default AddUser;

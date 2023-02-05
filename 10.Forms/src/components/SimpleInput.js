import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);

		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);

		console.log(enteredName);
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must be not Empty!</p>
				)}
			</div>
			<div className="form-actions">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

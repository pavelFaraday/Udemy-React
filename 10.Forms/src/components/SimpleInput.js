import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameToueched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailToueched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== ""; //true (input field is not empty)
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; // input is invalid == if enteredNameIsValid is empty(false) && enteredNameTouched false(untouched)

	const enteredEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const nameInputBlur = () => {
		setEnteredNameToueched(true);
	};
	const emailInputBlur = () => {
		setEnteredEmailToueched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameToueched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);
		console.log(enteredEmail);

		setEnteredName("");
		setEnteredNameToueched(false);
		setEnteredEmail("");
		setEnteredEmailToueched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = enteredEmailIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onBlur={nameInputBlur}
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must be to Empty!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Your E-Mail</label>
				<input
					type="email"
					id="email"
					onBlur={emailInputBlur}
					onChange={emailInputChangeHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && (
					<p className="error-text">Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

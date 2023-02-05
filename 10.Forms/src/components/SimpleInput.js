import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== ""; // true == infut fild is not empty
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; // input is invalid ==> if $enteredNameIsValid is false (empty) && $enteredNameTouched is false (untouched)

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);
		setEnteredName("");
		setEnteredNameTouched(false);
	};

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
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must be not Empty!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid} type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default SimpleInput;

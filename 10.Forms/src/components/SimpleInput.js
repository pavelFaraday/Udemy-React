import { useState, useRef } from "react";

const SimpleInput = (props) => {
	const nameInfutRef = useRef();
	const [enteredName, setEnteredName] = useState("");

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		console.log(enteredName);
		const enteredValue = nameInfutRef.current.value;
		console.log(enteredValue);

		/* ! useRef for update value is not ideal - it is working, but it manipulates directly to the DOM !
		nameInfutRef.current.value = ""; 
		*/
		setEnteredName("");
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					ref={nameInfutRef}
					value={enteredName}
				/>
			</div>
			<div className="form-actions">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

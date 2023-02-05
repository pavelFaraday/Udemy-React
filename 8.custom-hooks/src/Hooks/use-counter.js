import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);

	// Because custom hook is FUNCTION, We must return something in custom hooks (array, object, string, boolean, number..)
	return counter;
};

export default useCounter;

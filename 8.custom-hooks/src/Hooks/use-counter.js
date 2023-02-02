import { useEffect, useState } from "react";

const useCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	// Because custom hook is FUNCTION, We must return something in custom hooks (array, object, string, boolean, number..)
	return counter;
};

export default useCounter;

import React, { useState, useEffect } from "react";

const Range = () => {
	const [data, setData] = useState(0);
	const [fruit, setFruit] = useState("Fruit");
	console.log(data);

	useEffect(() => {
		if (data == 0) {
			setFruit("Apple");
		} else if (data == 10) {
			setFruit("Orange");
		} else if (data == 20) {
			setFruit("Banana");
		} else if (data == 30) {
			setFruit("Kiwi");
		} else if (data == 40) {
			setFruit("Pineapple");
		} else if (data == 50) {
			setFruit("Proome");
		}
	}, [data]);

	return (
		<div>
			<h1>{fruit}</h1>
			<input
				type="range"
				min="0"
				max="50"
				step="10"
				onChange={(e) => setData(e.target.value)}
			/>
			<h1>{data}</h1>
		</div>
	);
};

export default Range;

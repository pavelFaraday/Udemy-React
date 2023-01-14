import React, { useContext } from "react";
import { AppContext } from "./App";

const Toko = () => {
	const { state, setState } = useContext(AppContext);
	return (
		<div>
			<h1>{state}</h1>
			<button
				onClick={() => {
					setState((prevState) => prevState + 1);
				}}
			>
				click
			</button>
		</div>
	);
};

export default Toko;

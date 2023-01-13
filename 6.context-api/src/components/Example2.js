import React, { useState, createContext, useContext } from "react";

// 1. create context
const AppContext = createContext(null);

export const Parent = () => {
	const [userName, setUserName] = useState("PedroTech");

	return (
		// 2. Wrap with context provider, 3. assigne value={}
		<AppContext.Provider value={{ userName, setUserName }}>
			<Child1 />
			<Child2 />
		</AppContext.Provider>
	);
};

export const Child1 = () => {
	const { userName } = useContext(AppContext);

	return <h1> {userName} </h1>;
};

export const Child2 = () => {
	// 4. use context
	const { setUserName } = useContext(AppContext);
	return (
		<div>
			<button
				onClick={() => {
					setUserName("PedroTechnologies");
				}}
			>
				Change Username
			</button>
		</div>
	);
};

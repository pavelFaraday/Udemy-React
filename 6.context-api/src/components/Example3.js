import React, { useState, createContext, useContext } from "react";

// 1. create context
const AppContext = createContext(null);

export const Parent = () => {
	const [userName, setUserName] = useState("PedroTech");
	const [count, setCount] = useState(0);

	return (
		// 2. wrap parent with <AppContext.Provider>
		// 3. add value={}
		<AppContext.Provider value={{ userName, setUserName, count, setCount }}>
			<Child1 />
			<Child2 />
			<Child3 />
			<Child4 />
		</AppContext.Provider>
	);
};

export const Child1 = () => {
	// 4. use Context
	const { userName } = useContext(AppContext);

	return <h1> {userName} </h1>;
};

export const Child2 = () => {
	// 4. use Context
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

export const Child3 = () => {
	// 4. use Context
	const { count } = useContext(AppContext);
	return <h1>{count}</h1>;
};

export const Child4 = () => {
	// 4. use Context
	const { setCount } = useContext(AppContext);
	return (
		<div>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				Change Count
			</button>
		</div>
	);
};

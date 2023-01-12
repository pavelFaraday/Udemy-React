import React, { useState, createContext, useContext } from "react";

// 1. Create Context
const AppContext = createContext(null);

export const Parent = () => {
	const [userName, setUserName] = useState("PedroTech");

	// 2. wrap component in <AppContext.Provider>
	// 3. set value={}
	return (
		<AppContext.Provider value={{ userName, setUserName }}>
			<div>
				{userName}
				<Child />
			</div>
		</AppContext.Provider>
	);
};

export const Child = () => {
	return <Grandchild />;
};

// 4. use Context
export const Grandchild = () => {
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

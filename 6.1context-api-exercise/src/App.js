import React, { useState, createContext } from "react";
import MainPage from "./MainPage";

export const AppContext = createContext(null);

function App() {
	const [count, setCounter] = useState({ name: "Steve" });

	return (
		<AppContext.Provider value={{ count, setCounter }}>
			<MainPage />
		</AppContext.Provider>
	);
}
export default App;

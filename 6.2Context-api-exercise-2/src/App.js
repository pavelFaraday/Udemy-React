import React, { useState, createContext } from "react";
import Toko from "./Toko";

export const AppContext = createContext(null);

function App() {
	const [state, setState] = useState(0);
	return (
		<AppContext.Provider value={{ state, setState }}>
			<Toko />
		</AppContext.Provider>
	);
}

export default App;

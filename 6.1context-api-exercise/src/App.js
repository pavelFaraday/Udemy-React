import React, { createContext } from "react";
import MainPage from "./MainPage";

export const AppContext = createContext(null);

function App() {
	const user = "Steve";
	return (
		<AppContext.Provider value={user}>
			<MainPage user={user} />
		</AppContext.Provider>
	);
}
export default App;

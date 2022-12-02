import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addListHandler = (uName, uAge) => {
		setUsersList((prevUserList) => {
			return [
				...prevUserList,
				{ id: Math.random().toString(), name: uName, age: uAge },
			];
		});
	};
	return (
		<div>
			<AddUser onAddUser={addListHandler} />
			/<UsersList users={usersList} />
		</div>
	);
}

export default App;

import React, { useContext } from "react";
import { AppContext } from "./App";

function Message() {
	const { user } = useContext(AppContext);
	return <p>Welcome {user}</p>;
}

export default Message;

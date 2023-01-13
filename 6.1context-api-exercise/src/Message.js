import React, { useContext } from "react";
import { AppContext } from "./App";

function Message() {
	const { count } = useContext(AppContext);
	return (
		<div>
			<h1>{count.name}</h1>
		</div>
	);
}

export default Message;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/products");
	};
	return (
		<>
			<h1>My Home Page</h1>
			<button onClick={navigateHandler}>Navigate</button>
		</>
	);
};

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	let activeLink = ({ isActive }) => (isActive ? classes.active : undefined);

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/" className={activeLink} end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" className={activeLink}>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;

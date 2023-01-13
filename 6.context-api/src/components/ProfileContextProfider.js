import React, { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
	const [userProfileInfo, setUserProfileInfo] = useState(null);
	const [listOfFriends, setListOfFriends] = useState([]);

	const value = {
		userProfileInfo,
		setUserProfileInfo,
		listOfFriends,
		setListOfFriends,
	};

	return (
		<ProfileContext.Provider value={value}>
			{children}
		</ProfileContext.Provider>
	);
};

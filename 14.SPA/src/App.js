import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/products", element: <Products /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

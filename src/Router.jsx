import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/page02",
				element: <Page02 />,
			},
			{
				path: "/page03",
				element: <Page03 />,
			},
			{
				path: "/page04",
				element: <Page04 />,
			},
			// Error Page
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

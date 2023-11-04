import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage";

const links = [
	{
		path: "/exchange",
		text: "Exchange",
	},
	{
		path: "/task-manager",
		text: "Task Manager",
	},
];

const router = createBrowserRouter([{ path: "/", element: <Homepage links={links} /> }]);

const App = () => {
	return (
		<>
			<NavBar links={links}/>
			<RouterProvider router={router} />
		</>
	);
};

export default App;

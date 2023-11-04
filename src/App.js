import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Exchange from "./Pages/Exchange";
import TaskManager from "./Pages/TaskManager";
import Login from "./Pages/Login";
import AuthLayer from "./Pages/AuthLayer";
import PageLayout from "./Pages/PageLayout";
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

const router = createBrowserRouter(
	[{ path: "/", element: <PageLayout links={links}><Homepage links={links} /></PageLayout> },
	 {path: "/exchange", element: <PageLayout links={links}><Exchange/></PageLayout>},
	 {path:"/task-manager", element:<PageLayout links={links}><TaskManager/></PageLayout>},
	 {path:"/login", element:<Login />}
	]);

const App = () => {
	return (
		<>
			<AuthLayer>
				<RouterProvider router={router} />
			</AuthLayer>
		</>
	);
};

export default App;

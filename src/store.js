import { configureStore } from "@reduxjs/toolkit";
import tasks from "./features/taskSlice";
import user from "./features/userSlice";

export default configureStore({
	reducer: {
		tasks,
		user
	},
});

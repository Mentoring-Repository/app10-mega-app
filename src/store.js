import { configureStore } from "@reduxjs/toolkit";
import tasks from "./features/taskSlice";

export default configureStore({
	reducer: {
		tasks,
	},
});

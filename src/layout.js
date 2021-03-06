import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/appContext";

import ToDoList from "./js/components/ToDoList";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
        <ToDoList />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

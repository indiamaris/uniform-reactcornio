/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import AppForm from './components/FORMS/AppForm';
// import AppX from './components/APPB/App';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <AppX /> */}
		<AppForm/>
	</React.StrictMode>
);


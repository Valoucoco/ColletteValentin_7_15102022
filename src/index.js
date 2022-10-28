
import React from 'react';
import './styles/index.css'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

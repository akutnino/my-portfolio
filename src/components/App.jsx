import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import Resume from './Resume';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='resume'
					element={<Resume />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

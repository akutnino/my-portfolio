import { BrowserRouter, Route, Routes } from 'react-router';

import Homepage from './Homepage.tsx';
import Resume from './Resume.tsx';

export default function App() {
	return (
		<BrowserRouter basename='/my-portfolio/'>
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

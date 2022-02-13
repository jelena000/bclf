
//this component consists of several subcomponents
import React, { useEffect, Fragment } from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './_helpers/store.js';
import {About} from './pages/About'
import {Main} from './pages/Main'
import {Registration} from './pages/Registration'

import './styles/index.css'
function App() {
  return (
    <Provider store={store}>
		<Router>
			<Fragment>
				<div className="scc-container">
					<Routes>
						<Route path="/" exact element={<Main />}/>
						<Route path="/About"  element={<About />}/>
						<Route path="/Registration"  element={<Registration />}/>
					</Routes>
				</div>
			</Fragment>
		</Router>
    </Provider>
  );
}

export default App;

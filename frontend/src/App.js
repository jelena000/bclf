
//this component consists of several subcomponents
import React, { useEffect, Fragment } from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './_helpers/store.js';
import {About} from './pages/About'
import {Main} from './pages/Main'
import {Registration} from './pages/Registration'
import {AboutBCLF} from './pages/AboutBCLF';
import {AboutMACC} from './pages/AboutMACC';
import {AbstractSubmission} from './pages/AbstractSubmission.js';
import {BCLFWelcomeLetter} from './pages/BCLFWelcomeLetter.js';
import {Committees} from './pages/Committees.js';
import {ContactUs} from './pages/ContactUs.js';
import {Eposters} from './pages/Eposters.js';
import {IndustrySponsorSymposia} from './pages/IndustrySponsorSymposia.js';
import {InvitedSpeakers} from './pages/InvitedSpeakers.js';
import {MainTopics} from './pages/MainTopics.js';
import {MedtechEurope} from './pages/MedtechEurope.js';
import {MACCWelcomeLetter} from './pages/MACCWelcomeLetter.js';
import {OralPresentationInstructions} from './pages/OralPresentationInstructions.js';
import {ScientificAgenda} from './pages/ScientificAgenda.js';
import {Sponsors} from './pages/Sponsors.js';
import {SponsorsSP} from './pages/SponsorsSP.js';
import {VisaSupport} from './pages/VisaSupport.js';
import { FirstAnnouncment } from './pages/FirstAnnouncment.js';
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
						<Route path="/AboutBCLF" element={<AboutBCLF />}/>
						<Route path="/AboutMACC" element={<AboutMACC />}/>
						<Route path="/AbstractSubmission" element={<AbstractSubmission />}/>
						<Route path="/BCLFWelcomeLetter" element={<BCLFWelcomeLetter />}/>
						<Route path="/Committees" element={<Committees />}/>
						<Route path="/ContactUs" element={<ContactUs />}/>
						<Route path="/Eposters" element={<Eposters />}/>
						<Route path="/IndustrySponsorSymposia" element={<IndustrySponsorSymposia />}/>
						<Route path="/InvitedSpeakers" element={<InvitedSpeakers />}/>
						<Route path="/MainTopics" element={<MainTopics />}/>
						<Route path="/MedtechEurope" element={<MedtechEurope />}/>
						<Route path="/MACCWelcomeLetter" element={<MACCWelcomeLetter />}/>
						<Route path="/OralPresentationInstructions" element={<OralPresentationInstructions />}/>
						<Route path="/ScientificAgenda" element={<ScientificAgenda />}/>
						<Route path="/Sponsors" element={<Sponsors />}/>
						<Route path="/SponsorsSP" element={<SponsorsSP />}/>
						<Route path="/VisaSupport" element={<VisaSupport />}/>
						<Route path="/FirstAnnouncment" element={<FirstAnnouncment />}/>
					</Routes>
				</div>
			</Fragment>
		</Router>
    </Provider>
  );
}

export default App;

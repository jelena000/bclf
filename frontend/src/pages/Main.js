import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import budva from '../assets/budva.jpg';
import bclf from '../assets/bclf.png';
import bscl from '../assets/bscl.png';
import eflm from '../assets/eflm.png';
import ifcc from '../assets/ifcc.png';
import chemi from '../assets/chemi4.svg';
import chemi2 from '../assets/chemi3.svg';

export const Main = () => {
	return (
		<div className="home-root">
			<div className="home-main  pb-20 min-h-screen">
				<Header  />
				<div className='h-96 relative' style={{minHeight: 800, height: 800}}>
					<img className='absolute top-0 left-0 w-full h-full' src={budva} />
					<div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: '#182c54a3', zIndex: 22, background: 'linear-gradient(#001746, #012160a3)'}} />
					<div className='relative w-full h-full flex  items-center justify-center z-50 '>
						<div className=''>
							<h1 className='text-white'>BALKAN CLINICAL LABORATORY FEDERATION MEETING</h1>
							<div className='pl-6 flex justify-start items-center'>
								<i className="material-icons likes-icon text-yellow-400" style={{fontSize : '1.6rem',  paddingRight: 10, cursor: 'pointer'}}>event</i>

								<h4 className='text-white font-medium'>SEPTEMBER 8TH - SEPTEMBER 11TH 2021</h4>
							</div>
							<div className='pl-6 flex justify-start items-center'>
								<i className="material-icons likes-icon text-yellow-400" style={{fontSize : '1.6rem',  paddingRight: 10, cursor: 'pointer'}}>room</i>
								<h4 className='text-white font-medium'>NATIONAL PALACE OF CULTURE SOFIA, BULGARIA</h4>
							</div>
						</div>
						
					</div>
				</div>
				<div className='w-full relative z-40'>
					<div className='w-3/5 bg-blue-500 h-60 m-auto -mt-32 rounded-lg' style={{ backgroundColor: '#1778ff'}}>
						<div className=' flex justify-start items-center w-4/5 h-full m-auto gap-11'>
							<div>
								<img src={bclf} className="" />
							</div>
							<div>
								<img src={bscl} className="" />
							</div>
							<div>
								<img src={eflm} className="" />
							</div>
							<div>
								<img src={ifcc} className="" />
							</div>
						</div>
					</div>
				</div>
				<div className='h-screen'>
					<Link to='Registration' >
						<div style={{ padding: 10, backgroundColor: '#3cb2f5', color: '#fff', width: 200, margin: 'auto', marginTop: 100, textAlign: 'center', borderRadius: 12, textDecorationLine: "none"}}>
							REGISTRATION
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

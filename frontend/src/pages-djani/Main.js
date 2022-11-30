import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import budva from '../assets/budva.jpg';
import katic from '../assets/katic.jpg';
import bclf from '../assets/bclf.png';
import bscl from '../assets/bscl.png';
import eflm from '../assets/eflm.png';
import ifcc from '../assets/ifcc.png';
import chemi from '../assets/chemi4.svg';
import chemi2 from '../assets/chemi3.svg';
import Footer from '../components/Footer/Footer';
/**
 *                 <div className='h-96  relative w-full' style={{ background: 'linear-gradient(#001746, #133987)', zIndex: 22, height: 400}}>

 * @returns <div className='h-96  relative w-full overflow-hidden' style={{zIndex: 22, height: 400}}>
                    <img className='absolute top-0 left-0 w-full h-full' src={budva} style={{ height: 700}} />
					<div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: '#182c54a3', zIndex: 22, background: 'linear-gradient(#001746, #012160a3)'}} />
                </div>
 */

				//4b83f73b
export const Main = () => {
	return (
		<div className="home-root">
			<div className="home-main min-h-screen bg-blue-50">
				<Header isMain />
				<div className='h-cover-mobile lg:h-cover  relative'   >
					<img className='absolute top-0 left-0 w-full h-full' src={budva} />
					<div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: '#182c54a3', zIndex: 22, background: 'linear-gradient(#001746, #012160a3)'}} />
					<div className='relative w-3/4 m-auto h-full flex  items-center justify-center z-50 '>
						<div className=''>
							<h1 className='text-white lg:text-3xl text-lg text-center'>BALKAN CLINICAL LABORATORY FEDERATION MEETING</h1>
							<div className='mt-10'>
								<div className='pl-6 flex justify-start items-center'>
									<i className="material-icons likes-icon text-yellow-400 text-base lg:text-2xl" style={{  paddingRight: 10, cursor: 'pointer'}}>event</i>

									<h4 className='text-white font-medium lg:text-lg text-xs'>SEPTEMBER 8TH - SEPTEMBER 11TH 2022</h4>
								</div>
								<div className='pl-6 flex justify-start items-center'>
									<i className="material-icons likes-icon text-yellow-400 text-base lg:text-2xl" style={{  paddingRight: 10, cursor: 'pointer'}}>room</i>
									<h4 className='text-white font-medium lg:text-lg text-xs'>HOTEL MEDITERAN BUDVA, MONTENEGRO</h4>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className='w-full relative z-40'>
					<div className='w-full md:w-3/5 bg-blue-500 md:h-52 m-auto -mt-32 rounded-lg' style={{ backgroundColor: '#1778ff'}}>
						<div className=' flex flex-wrap justify-center items-center w-4/5 h-full m-auto'>
							<div className='w-1/2 p-5 md:w-1/4 flex flex-wrap justify-center items-center'>
								<img src={bclf} className="" />
							</div>
							<div className='w-1/2 p-5 md:w-1/4 flex flex-wrap justify-center items-center'>
								<img src={bscl} className="" />
							</div>
							<div className='w-1/2 p-5 md:w-1/4 flex flex-wrap justify-center items-center'>
								<img src={eflm} className="" />
							</div>
							<div className='w-1/2 p-5 md:w-1/4 flex flex-wrap justify-center items-center'>
								<img src={ifcc} className="" />
							</div>
						</div>
					</div>
				</div>
				<section className=' pb-96'>
					<div className='w-full lg:w-3/4 m-auto pt-32'>
						<div className='flex justify-center items-center flex-wrap'>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full shadow-md' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>book</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'> E-posters</span>
										</div>
									</div>
									
								</div>
							</div>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full  shadow-md' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>how_to_reg</i>
											</div>
										</div>
										<div className='pl-5'>
											<Link to="/Registration" className='text-lg font-bold text-blue-900 cursor-pointer hover:underline'>Registration Form</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full  shadow-md' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'> Scientific program</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-center items-center flex-wrap'>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>First Announcement</span>
										</div>
									</div>
									
								</div>
							</div>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>featured_play_list</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>Main topics</span>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full p-5 lg:w-1/3'>
								<div className='bg-white h-52 rounded-md shadow-md p-10 flex items-center justify-start' >
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-full' style={{ backgroundColor: "#006bff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4b83f73b"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>Second Announcement</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}

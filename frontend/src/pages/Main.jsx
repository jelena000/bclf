import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import budva from '../assets/budva.jpg';
import bclf from '../assets/bclf.png';
import bscl from '../assets/bscl.png';
import eflm from '../assets/eflm.png';
import ifcc from '../assets/ifcc.png';
import city from '../assets/people2.svg';
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
				<section className='pb-32'>
					<div className='w-full  lg:w-3/4 m-auto pt-24'>
						<div className='text-center pb-16'>
							<h1> Explore our services </h1>
							<p className='text-gray-500'>
								Explore our services with buttons
							</p>
						</div>
						<div className='flex justify-center items-center flex-wrap'>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl ' style={{ backgroundColor: "#d2ecfe"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#b0d8f3"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>book</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'> E-posters</span>
										</div>
									</div>
									
								</div>
							</div>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl  ' style={{ backgroundColor: "#f5c4d9"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#ffa1c98c"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>how_to_reg</i>
											</div>
										</div>
										<div className='pl-5'>
											<Link to="/Registration" className='text-lg font-bold text-blue-900 cursor-pointer hover:underline'>Registration Form</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl  ' style={{ backgroundColor: "#00eeff38"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#4bf7e03a"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'> Scientific program</span>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl' style={{ backgroundColor: "#c7c9ff"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#b3b5f7"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>First Announcement</span>
										</div>
									</div>
									
								</div>
							</div>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start' >
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl' style={{ backgroundColor: "#ff000038"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#f9b1b1"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>article</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>Second Announcement</span>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full p-5 md:w-1/2 xl:w-1/3'>
								<div className='bg-white h-52 rounded-2xl shadow-md p-10 flex items-center justify-start'>
									<div className='flex items-center justify-start'>
										<div className='  bg-blue-300  w-24 h-24 flex items-center justify-center rounded-2xl' style={{ backgroundColor: "#ff5e0038"}}>
											<div className=' rounded-full bg-blue-300 w-16 h-16 flex items-center justify-center' style={{backgroundColor: "#f5c8ad"}}>
												<i className="material-icons likes-icon text-blue-500 text-3xl"  style={{  cursor: 'pointer'}}>featured_play_list</i>
											</div>
										</div>
										<div className='pl-5'>
											<span className='text-lg font-bold text-blue-900'>Main topics</span>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</section>
				<section className='py-24 w-full bg-purple-100' style={{ backgroundColor: '#1778ff' /*'#5a8b972e'*/}}>
					<div className='w-3/4 m-auto flex flex-wrap text-white '>
						<div className='w-full lg:w-1/3 flex items-center  flex-col'>
							<div className='text-center pb-10 pl-16 animate animate-fade-in-up'>
								<h1> Announcements </h1>
							</div>
							<div className=" animate animate-fade-in-up p-20 rounded-full flex justify-center items-center bg-gray-100 rounded-t-full rounded-br-2xl " style={{ height: 500, backgroundColor: "#eff6ff"}}>
								<img src={city} className="" />
							</div>
						</div>
						<div className=' w-full lg:w-2/3 pt-44'>
							<div className='text-center pb-10 lg:pl-16 '>
									<div className='animate animate-fade-in-up font-semibold pb-3 text-2xl '>We welcome you to Montenegro and hope you enjoy a wonderful and useful stay here during the conference!</div>
									<div className='py-5 animate animate-fade-in-up'>
										<span className='text-gray-300 '>
											On behalf of the Organizing Committee, we would like to inform you that we have done everything in our power to make sure you stay safe during the Congress. Your health is our absolute priority.
										</span>
									<div className='pt-14 animate animate-fade-in-up'>
										<span className='font-semibold'>
											We would like to inform you that the Government requirement for Congress participants is to bring one the following documents:
										</span>
										<div className='pt-2 text-left text-gray-300 px-20'>
											<div className='p-2 animate animate-fade-in-up'>
											- A negative PCR molecular test result from a laboratory; the test must be taken up to 72 hours before the event
											</div>
											<div className='p-2 animate animate-fade-in-up'>
											- A negative antigen (rapid) test result from a laboratory; the test must be taken up to 48 hours before the event.
											</div>
											<div className='p-2 animate animate-fade-in-up'>
											- A vaccination certificate issued by a certified authority.
											</div>
											<div className='p-2 animate animate-fade-in-up'>
											- A certificate of recovery from the SARS-CoV-2 virus infection issued by a public authority or a certified laboratory
											</div>
										</div>
									</div>
									

									<div className='pt-10'>
										<span className='font-semibold animate animate-fade-in-up'>
											"WE WILL PROVIDE A MEDICAL TEAM IN THE CONGRESS VENUE TO CONDUCT ANTIGEN (RAPID) TESTS BEFORE THE EVENT AS WELL FOR YOUR CONVENIENCE!"

										</span>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</section>
				<section className='py-24 w-full'>
					<div className='text-center pb-16'>
						<h1> Important Dates </h1>
						<p className='text-gray-500'>
							These are the most important dates
						</p>
					</div>
                    <div className='w-2/3 flex m-auto gap-5 justify-center'>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>Late abstract submission opening:
                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>OPEN</span>
                            </div>
                        </div>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>
                                Late abstract submission deadline:
                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>
                                Late abstract and poster acceptance notification:
                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 flex m-auto gap-5 justify-center mt-10'>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>Authors’ registration deadline:
                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>
                                Early bird registration deadline:

                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                        <div className='bg-gray-300 p-5 rounded-md text-center flex-1 h-28  shadow-md' style={{ backgroundColor: "#bdd8ff"}}>
                            <span>
                                Online late registration deadline:
                            </span>
                            <div className='pt-3'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 flex m-auto gap-5 justify-center mt-10  shadow-md'>
                        <div className='bg-blue-500 p-5 rounded-md text-center flex-1 h-72 text-white pt-10'>
                            <span className='text-2xl'>
                                Official Opening Ceremony
                            </span>
                            <div className='p-3 bg-blue-400 w-52 rounded m-auto mt-16'>
                                <span className='font-bold'>20th July 2021</span>
                            </div>
                        </div>
                    </div>
				</section>
			</div>
			<Footer />
		</div>
	)
}

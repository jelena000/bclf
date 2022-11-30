import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import katic from '../assets/katic.jpg';
import city from '../assets/people2.svg';
import Footer from '../components/Footer/Footer';

export const FirstAnnouncment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

	return (
		<div className="home-root">
			<div className="home-main min-h-screen bg-blue-50">
				<Header isMain />
				<div className='h-cover-mobile lg:h-cover  relative'   >
					<img className='absolute top-0 left-0 w-full h-full' src={katic} />
					<div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: '#182c54a3', zIndex: 22, background: 'linear-gradient(#001746, #012160a3)'}} />
					<div className='relative w-3/4 m-auto h-full flex  items-center justify-center z-50 '>
						<div className=''>
							<h1 className='text-white lg:text-4xl text-lg text-center '>21ST MEETING OF THE BALKAN <br></br><br></br> CLINICAL LABORATORY FEDERATION</h1>
							<div className='mt-10 pt-20'>
								<div className='pl-6  justify-between items-center lg:text-right lg:gap-20 gap-4 lg:flex block'>
									<h4 className='text-white font-medium lg:text-xl text-base'>2ND MONTENEGRIAN CONFERENCE <br></br> OF CLINICAL CHEMISTRY <br></br> AND LABORATORY MEDICINE</h4>
									<h4 className='text-white font-medium lg:text-xl text-base'>DRUGI CRNOGORSKI KONGRES <br></br> KLINICKE HEMIJE <br></br> I LABARATORIJSKE MEDICINE</h4>
								</div>
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
                                            <Link to="/FirstAnnouncment" className='text-lg font-bold text-blue-900 cursor-pointer hover:underline'>First Announcement</Link>
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
				
			</div>
			<Footer />
		</div>
	)
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MultiStep from '../components/MultiStep';
import budva from '../assets/budva.jpg';
import PersonalInfo from '../components/StepForms/PersonalInfo';
import RegistrationForm  from '../components/StepForms/RegistrationForm';
import GeneralInfo from '../components/StepForms/GeneralInfo';
import Accommodation from '../components/StepForms/Accommodation';
import Transfers from '../components/StepForms/Transfers/Transfers';
import Invoice from '../components/StepForms/Invoice';
import Submit from '../components/StepForms/Submit';
import {constants} from '../_constants/constants';
import validator from 'validator';

export const Registration = () => {
    const [loading, setloading] = useState(false);
    const [completedSteps, setCompletedSteps] = useState([false, false, false, false, false, false]);
    const [selectedStep, setSelectedStep] = useState(0);
    // PERSONAL INFORMATION
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [adress, setAdress] = useState('');
    const [dietary, setDietary] = useState('');
    const [invitationLetter, setInvitationLetter] = useState(false);
    //REGISTRATION
    const [registrationPlan, setRegistrationPlane] = useState(null);
    //ACCOMMODATION
    const [shouldAccommodate, setShouldAccommodate] = useState({ label: "No", value: "No"});
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    const [nights, setNights] = useState('');
    const [roomDeposit, setRoomDeposit] = useState('');
    const [noteAccommodate, setNodeAccommodate] = useState('');
    //TRANSFER
    const [arrivalTransfer, setArrivalTransfer] = useState({ label: "No", value: "No"});
    const [arrivalPersonsTransfer, setArrivalPersonsTransfer] = useState(1);
    const [arrivalDateTransfer, setArrivalDateTransfer] = useState(new Date());
    const [arrivalFlightTransfer, setArrivalFlightTransfer] = useState('');
    const [arrivalFromTransfer, setArrivalFromTransfer] = useState('');
    const [departureTransfer, setDepartureTransfer] = useState({ label: "No", value: "No"});
    const [departurePersonsTransfer, setDeparturePersonsTransfer] = useState(1);
    const [departureDateTransfer, setDepartureDateTransfer] = useState(new Date());
    const [departureFlightTransfer, setDepartureFlightTransfer] = useState('');
    const [departureFromTransfer, setDepartureFromTransfer] = useState('');
    //INVOICE
    const [invoiceIssue, setInvoiceIssue] = useState(1);
    const [invoiceCompany, setInvoiceCompany] = useState('');
    const [invoiceCountry, setInvoiceCountry] = useState('');
    const [invoiceCity, setInvoiceCity] = useState('');
    const [invoiceAdress, setInvoiceAdress] = useState('');
    const [invoiceRegNum, setInvoiceRegNum] = useState('');
    const [invoiceTax, setInvoiceTax] = useState('');

    useEffect(() => {
        validatePersonalInfo();
    }, [name, surname, email, phone, country, city, postalCode, organisation, adress, dietary]);

    useEffect(() => {
        validatePersonalInfo();
    }, [registrationPlan]);

    useEffect(() => {
        validateAccomodation();
    }, [shouldAccommodate, arrivalDate, departureDate, nights, roomDeposit, noteAccommodate]);

    useEffect(() => {
        validateTransfer();
    }, [arrivalTransfer, arrivalPersonsTransfer, arrivalDateTransfer, arrivalFlightTransfer, arrivalFromTransfer, departureTransfer, departurePersonsTransfer, departureDateTransfer, departureFlightTransfer, departureFromTransfer]);

    useEffect(() => {
        validateInvoice();
    }, [invoiceIssue, invoiceCompany, invoiceCountry, invoiceCity, invoiceAdress, invoiceRegNum, invoiceTax]);
    
    useEffect(() => {
        //loadFormDataLocaly();
    }, []);

    const loadFormDataLocaly = async () => {
        const local_data = localStorage.getItem(constants.USER_TOKEN);

        if(!local_data){
            saveFormDataLocaly();
        }else {
            const form_data = await JSON.parse(local_data);

            if(form_data){
                setCompletedSteps(form_data.completedSteps);
                //SET STATES
            }
        }
    }

    const saveFormDataLocaly = async () => {
        const form_data = {
            completedSteps,
            name, surname, email, phone, country, city, postalCode, organisation, adress, dietary, invitationLetter,
            registrationPlan,
            shouldAccommodate, arrivalDate, departureDate, nights, roomDeposit, noteAccommodate,
            arrivalTransfer, arrivalPersonsTransfer, arrivalDateTransfer, arrivalFlightTransfer, arrivalFromTransfer, departureTransfer, departurePersonsTransfer, departureDateTransfer, departureFlightTransfer, departureFromTransfer, 
            invoiceIssue, invoiceCompany, invoiceCountry, invoiceCity, invoiceAdress, invoiceRegNum, invoiceTax,
        }

        localStorage.setItem(constants.USER_TOKEN, JSON.stringify(form_data));
    }

    const validatePersonalInfo = () => {
        let isValidate = true;

        if(!name) isValidate = false;
        if(!surname) isValidate = false;
        if(!validator.isEmail(email)) isValidate = false;
        if(!phone) isValidate = false;
        if(!country) isValidate = false;
        if(!city) isValidate = false;
        if(!postalCode) isValidate = false;
        if(!organisation) isValidate = false;
        if(!adress) isValidate = false;
        if(!dietary) isValidate = false;

        if(completedSteps[1] !== isValidate){
            setCompletedSteps(
                completedSteps.map((c,i) => ( i === 1 ? !c : c))
            )
        }
    }
    
    const validateRegistration = () => {
        let isValidate = true;
    
        if(!registrationPlan) isValidate = false;
    
        if(completedSteps[2] !== isValidate){
            setCompletedSteps(
                completedSteps.map((c,i) => ( i === 2 ? !c : c))
            )
        }
    } 

    const validateAccomodation = () => {
        let isValidate = true;
    
        if(!shouldAccommodate) isValidate = false;
        if(!arrivalDate) isValidate = false;
        if(!departureDate) isValidate = false;
        if(!nights) isValidate = false;
        if(!roomDeposit) isValidate = false;
        if(!noteAccommodate) isValidate = false;
    
        if(completedSteps[3] !== isValidate){
            setCompletedSteps(
                completedSteps.map((c,i) => ( i === 3 ? !c : c))
            )
        }
    }

    const validateTransfer = () => {
        let isValidate = true;

        if(!arrivalTransfer) isValidate = false;
        if(!arrivalPersonsTransfer) isValidate = false;
        if(!arrivalDateTransfer) isValidate = false;
        if(!arrivalFlightTransfer) isValidate = false;
        if(!arrivalFromTransfer) isValidate = false;
        if(!departureTransfer) isValidate = false;
        if(!departurePersonsTransfer) isValidate = false;
        if(!departureFlightTransfer) isValidate = false;
        if(!departureFromTransfer) isValidate = false;


        if(completedSteps[4] !== isValidate){
            setCompletedSteps(
                completedSteps.map((c,i) => ( i === 4 ? !c : c))
            )
        }
    }

    const validateInvoice = () => {
        let isValidate = true;

        if(!invoiceIssue) isValidate = false;
        if(!invoiceCompany) isValidate = false;
        if(!invoiceCountry) isValidate = false;
        if(!invoiceCity) isValidate = false;
        if(!invoiceAdress) isValidate = false;
        if(!invoiceRegNum) isValidate = false;
        if(!invoiceTax) isValidate = false;
        if(completedSteps[5] !== isValidate){
            setCompletedSteps(
                completedSteps.map((c,i) => ( i === 5 ? !c : c))
            )
        }				
    }

    const onSubmit = async () => {
        await setloading(true);

        const form_data = {
            completedSteps,
            name, surname, email, phone, country, city, postalCode, organisation, adress, dietary, invitationLetter,
            registrationPlan,
            shouldAccommodate, arrivalDate, departureDate, nights, roomDeposit, noteAccommodate,
            arrivalTransfer, arrivalPersonsTransfer, arrivalDateTransfer, arrivalFlightTransfer, arrivalFromTransfer, departureTransfer, departurePersonsTransfer, departureDateTransfer, departureFlightTransfer, departureFromTransfer, 
            invoiceIssue, invoiceCompany, invoiceCountry, invoiceCity, invoiceAdress, invoiceRegNum, invoiceTax,
        }

        axios.post('/api/register', form_data)
        .then((res) => {
            setloading(false);

            const server_data = res.data;
            if(server_data?.success){
                console.log({
                    success: server_data.msg
                });
                //Load data 
            }else {
                console.log({
                    error: server_data?.msg || 'fatal error'
                });
            }
        },(error) => {
            setloading(false);
            console.log({error});
        });
    }

    const onMultiStepChange = (step) => {
        setSelectedStep(step);
    }

    const onCountryChange = (value) => {
        setCountry(value);
    }

    const generateStepForm = () => {
        switch (selectedStep) {
            case 0: 
                return (
                    <GeneralInfo  />
                )
            case 1: 
                return (
                    <PersonalInfo 
                        name={name} 
                        surname={surname}
                        email={email} 
                        phone={phone}
                        country={country} 
                        city={city}
                        postalCode={postalCode}
                        organisation={organisation}
                        adress={adress}
                        dietary={dietary}
                        invitationLetter={invitationLetter}
                        /*           SET CALLBACKS                */
                        setName={setName} 
                        setSurname={setSurname} 
                        setEmail={setEmail} 
                        setPhone={setPhone} 
                        onCountryChange={onCountryChange}
                        setPostalCode={setPostalCode} 
                        setCity={setCity}
                        setOrganisation={setOrganisation}
                        setAdress={setAdress}
                        setDietary={setDietary}
                        setInvitationLetter={setInvitationLetter}

                    />
                )
            case 2: 
                return (
                    <RegistrationForm 
                        registrationPlan={registrationPlan}
                        setRegistrationPlane={setRegistrationPlane}
                    />
                )
            case 3: 
                return (
                    <Accommodation
                        shouldAccommodate={shouldAccommodate} 
                        arrivalDate={arrivalDate}
                        departureDate={departureDate} 
                        nights={nights}
                        roomDeposit={roomDeposit} 
                        noteAccommodate={noteAccommodate}
                        /*           SET CALLBACKS                */
                        setShouldAccommodate={setShouldAccommodate}
                        setArrivalDate={setArrivalDate}
                        setArrivalDate={setArrivalDate}
                        setDepartureDate={setDepartureDate}
                        setNights={setNights}
                        setRoomDeposit={setRoomDeposit}
                        setNodeAccommodate={setNodeAccommodate}
                    />
                )
            case 4: 
                return (
                    <Transfers 
                        arrivalTransfer={arrivalTransfer} 
                        arrivalPersonsTransfer={arrivalPersonsTransfer}
                        arrivalDateTransfer={arrivalDateTransfer} 
                        arrivalFlightTransfer={arrivalFlightTransfer}
                        arrivalFromTransfer={arrivalFromTransfer}
                        departureTransfer={departureTransfer}
                        departurePersonsTransfer={departurePersonsTransfer}
                        departureDateTransfer={departureDateTransfer}
                        departureFlightTransfer={departureFlightTransfer}
                        departureFromTransfer={departureFromTransfer}
                        /*           SET CALLBACKS                */
                        setArrivalTransfer={setArrivalTransfer} 
                        setArrivalPersonsTransfer={setArrivalPersonsTransfer}
                        setArrivalDateTransfer={setArrivalDateTransfer} 
                        setArrivalFlightTransfer={setArrivalFlightTransfer}
                        setArrivalFromTransfer={setArrivalFromTransfer}
                        setDepartureTransfer={setDepartureTransfer}
                        setDeparturePersonsTransfer={setDeparturePersonsTransfer}
                        setDepartureDateTransfer={setDepartureDateTransfer}
                        setDepartureFlightTransfer={setDepartureFlightTransfer}
                        setDepartureFromTransfer={setDepartureFromTransfer}
                    />
                )
            case 5: 
                return (
                    <Invoice 
                        invoiceIssue={invoiceIssue} 
                        setInvoiceIssue={setInvoiceIssue} 
                        invoiceCompany={invoiceCompany}
                        setInvoiceCompany={setInvoiceCompany}
                        invoiceCountry={invoiceCountry}
                        setInvoiceCountry={setInvoiceCountry}
                        invoiceCity={invoiceCity}
                        setInvoiceCity={setInvoiceCity}
                        invoiceAdress={invoiceAdress}
                        setInvoiceAdress={setInvoiceAdress}
                        invoiceRegNum={invoiceRegNum}
                        setInvoiceRegNum={setInvoiceRegNum}
                        invoiceTax={invoiceTax}
                        setInvoiceTax={setInvoiceTax}
                    />
                )
            case 6: 
                return (
                    <Submit />
                )
            default: return null
        }
    }
    
    return (
        <div className="home-root">
			<div className="home-main bg-blue-50 pb-20 min-h-screen mb-10">
				<Header isMain />
                <div className='h-96  relative w-full overflow-hidden' style={{zIndex: 22, height: 400}}>
                    <img className='absolute top-0 left-0 w-full h-full' src={budva} style={{ height: 800}} />
					<div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: '#182c54a3', zIndex: 22, background: 'linear-gradient(#001746, #012160a3)'}} />
                </div>
                <div className='w-full relative z-40 -mt-60 pb-52'>
                    <div className='w-full md:w-3/5 m-auto text-white text-center pb-10'>
                        <h1> Registration</h1>
                    </div>
					<div className='w-full lg:w-4/5 xl:w-4/5 2xl:w-4/6  pb-24 m-auto  rounded-lg shadow-lg  overflow-visible relative bg-white'>
                        <MultiStep 
                            stepNum={selectedStep} 
                            onStepChange={onMultiStepChange} 
                            completed={completedSteps} 
                        />
                        <div className='w-5/6 m-auto pt-16'>
                            <div className=''>
                                <div>
                                    {loading ? 'loading' : null}
                                </div>
                                <form>
                                    {
                                        generateStepForm()
                                    }
                                </form>
                            </div>
                        </div>
                         <div className='w-full absolute left-0 bottom-0 h-32  flex items-center justify-center gap-5 pr-20 pl-20'>
                         {selectedStep < completedSteps.length ? 
                            <>
                                {selectedStep > 0 && <button onClick={() => setSelectedStep(selectedStep - 1)} type="submit" style={{ fontSize: 10}} class=" text-gray-400 border border-gray-400  focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs w-full sm:w-auto px-5 py-3 text-center ">
                                    PREVIUOS
                                </button>}
                                <button onClick={() => setSelectedStep(selectedStep + 1)} type="submit"  style={{ fontSize: 10}}  class=" text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    CONTINUE
                                </button>
                            </>
                            :
                            <>
                                <button onClick={() => setSelectedStep(selectedStep - 1)} type="submit" style={{ fontSize: 10}} class=" text-gray-400 border border-gray-400  focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs w-full sm:w-auto px-5 py-3 text-center ">
                                    PREVIUOS
                                </button>
                                <button onClick={onSubmit} type="submit"  style={{ fontSize: 10}}  class=" text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    SUBMIT
                                </button>
                            </>
                        }
                        </div>
					</div>
				</div>
			</div>
            <Footer />
		</div>
        
    )
}

import React from 'react'
import { RegistrationPageLabels} from '../../../_constants/labels';
import DropDownList from '../../DropDownList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Transfers = (
    { 
        arrivalTransfer, 
        arrivalPersonsTransfer, 
        arrivalDateTransfer, 
        arrivalFlightTransfer, 
        arrivalFromTransfer, 
        departureTransfer, 
        departurePersonsTransfer, 
        departureDateTransfer, 
        departureFlightTransfer, 
        departureFromTransfer, 
        setArrivalTransfer, 
        setArrivalPersonsTransfer,
        setArrivalDateTransfer,
        setArrivalFlightTransfer,
        setArrivalFromTransfer,
        setDepartureTransfer,
        setDeparturePersonsTransfer,
        setDepartureDateTransfer,
        setDepartureFlightTransfer,
        setDepartureFromTransfer,
    }) => {

    return (
        <div className=''>
            <div className='row'>
                <div className='py-4 px-4 w-full bg-blue-200 rounded-md'>
                    <span className='font-bold text-base text-blue-900'>
                        Arrival:  
                        <span className='font-normal'>
                            {` I would like a transfer from Podgorica International airport to my hotel:`}
                        </span>
                    </span>
                </div>
                <div className='flex flex-wrap'>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.CHOOSE_TRANSFER_INFO}
                        </label>
                        <DropDownList
                            placeholder='Choose' 
                            options={[{label:'Yes', value: 'Yes'},{label:'No', value: 'No'}]} 
                            selectedValue={arrivalTransfer} 
                            onValueChange={setArrivalTransfer} 
                        />  
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="arrivalPersonsTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.PERSONS}
                        </label>
                        <input 
                            value={arrivalPersonsTransfer} 
                            onChange={(e) => setArrivalPersonsTransfer(e.target.value)} 
                            placeholder="" 
                            type="number" 
                            id="arrivalPersonsTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="arrivalDateTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.ARRIVAL_DATE}
                        </label>
                        <DatePicker 
                            selected={arrivalDateTransfer} 
                            showTimeSelect
                            showTimeInput
                            startDate={new Date()}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            onChange={(date) => setArrivalDateTransfer(date)} 
                            className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="arrivalFlightTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.ARRIVAL_FL_NUM}
                        </label>
                        <input 
                            value={arrivalFlightTransfer} 
                            onChange={(e) => setArrivalFlightTransfer(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="arrivalFlightTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="arrivalFromTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.FL_FROM}
                        </label>
                        <input 
                            value={arrivalFromTransfer} 
                            onChange={(e) => setArrivalFromTransfer(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="arrivalFromTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='py-4 px-4 w-full bg-blue-200 rounded-md'>
                    <span className='font-bold text-base text-blue-900'>Departure : <span className='font-normal'>I would like a transfer from Podgorica International airport to my hotel:</span></span>
                </div>
                <div className='flex flex-wrap'>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.CHOOSE_TRANSFER_INFO}
                        </label>
                        <DropDownList 
                            placeholder='Choose' 
                            options={[{label:'Yes', value: 'Yes'},{label:'No', value: 'No'}]} 
                            selectedValue={departureTransfer}
                            onValueChange={setDepartureTransfer}
                        />  
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="departurePersonsTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.PERSONS}
                        </label>
                        <input 
                            value={departurePersonsTransfer} 
                            onChange={(e) => setDeparturePersonsTransfer(e.target.value)} 
                            placeholder="" 
                            type="number" 
                            id="departurePersonsTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="departureDateTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.DEPARTURE_DATE}
                        </label>
                        <DatePicker 
                            selected={departureDateTransfer} 
                            showTimeSelect
                            showTimeInput
                            dateFormat="MMMM d, yyyy h:mm aa"
                            onChange={(date) => setDepartureDateTransfer(date)} 
                            className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="departureFlightTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.DEPARTURE_FL_NUM}
                        </label>
                        <input 
                            value={departureFlightTransfer} 
                            onChange={(e) => setDepartureFlightTransfer(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="departureFlightTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                    <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <label for="departureFromTransfer" class="block mb-2 text-xs font-medium text-gray-400 ">
                            {RegistrationPageLabels.FL_TO}
                        </label>
                        <input 
                            value={departureFromTransfer} 
                            onChange={(e) => setDepartureFromTransfer(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="departureFromTransfer" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Transfers;

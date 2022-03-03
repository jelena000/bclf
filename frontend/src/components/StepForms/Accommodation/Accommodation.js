import React from 'react'
import COUNTRIES from '../../../_constants/countries';
import { RegistrationPageLabels} from '../../../_constants/labels';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DropDownList from '../../DropDownList';
import CustomTable from '../../CustomTable';

const countriesArray = COUNTRIES.map((c) => ({ 
    label : c.name, 
    value: c.code
}));

const Accommodation = ({ shouldAccommodate, arrivalDate, departureDate, nights, roomDeposit, noteAccommodate, setShouldAccommodate, setArrivalDate, setDepartureDate, setNights, setRoomDeposit, setNoteAccommodate}) => {

    return (
        <div className=''>
            <div className='flex flex-wrap'>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.ACC_INFO}
                    </label>
                    <DropDownList 
                        placeholder='Choose' 
                        options={[{label:'Yes', value: "Yes"},{label:'No', value: "No"}]} 
                        selectedValue={shouldAccommodate} 
                        onValueChange={setShouldAccommodate} 
                    />  
                </div>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="postalCode" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.ARRIVAL_DATE}
                    </label>
                    <DatePicker 
                        selected={arrivalDate} 
                        onChange={(date) => setArrivalDate(date)} 
                        className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="departureDate" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.DEPARTURE_DATE}
                    </label>
                    <DatePicker 
                        selected={departureDate} 
                        onChange={(date) => setDepartureDate(date)} 
                        className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="nights" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.NIGHTS}
                    </label>
                    <input 
                        value={nights} 
                        onChange={(e) => setNights(e.target.value)} 
                        placeholder="" 
                        type="text" 
                        id="nights" 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required
                    /> 
                </div>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="roomDeposit" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.ROOM_DEPOSITE}
                    </label>
                    <input 
                        value={roomDeposit} 
                        onChange={(e) => setRoomDeposit(e.target.value)} 
                        placeholder="" 
                        type="number" 
                        id="roomDeposit" 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required
                    /> 
                </div>
                <div class="mb-3 w-full md:w-1/2 lg:w-1/3 p-4 ">
                    <label for="noteAccommodate" class="block mb-2 text-xs font-medium text-gray-400 -mt-4 " style={{ minHeight: 30}}>
                        {RegistrationPageLabels.ROOMATE_WITH}
                    </label>
                    <input
                        value={noteAccommodate} 
                        onChange={(e) => setNoteAccommodate(e.target.value)} 
                        placeholder="" 
                        type="text" 
                        id="noteAccommodate" 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required
                    /> 
                </div>
            </div>
            <div className='relative py-10'>
                <CustomTable />
            </div>
        </div>
    )
}

export default Accommodation;

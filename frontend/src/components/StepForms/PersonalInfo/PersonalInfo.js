import React from 'react'
import COUNTRIES from '../../../_constants/countries';
import { RegistrationPageLabels} from '../../../_constants/labels';
import DropDownList from '../../DropDownList';
import Switch from "react-switch";

const countriesArray = COUNTRIES.map((c) => ({ 
    label : c.name, 
    value: c.name
}));

const PersonalInfo = ({ name, surname, email, phone, country, city, postalCode, organisation, adress, dietary, invitationLetter, setName, setSurname, setEmail, setPhone, onCountryChange, setCity, setPostalCode, setOrganisation, setAdress, setDietary, setInvitationLetter }) => {

    return (
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div class="mb-6 flex gap-3">
                    <div className='w-2/5'>
                        <span for="surname" class="block mb-2 text-xs font-medium text-gray-400 pl-1">
                            {RegistrationPageLabels.TITLE}
                        </span>
                        <DropDownList 
                            placeholder='Choose' 
                            options={[{label:'Mr.'},{label:'MS'}]} 
                            selectedValue={country} 
                            onValueChange={onCountryChange} 
                        />  
                    </div>
                    <div className='w-3/5'>
                        <label for="name" class="block mb-2 text-xs font-medium text-gray-400">
                            {RegistrationPageLabels.FIRST_NAME}
                        </label>
                        <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="name" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>
                    
                </div>
                <div class="mb-6">
                    <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.TEL_NUMBER}
                    </label>
                    <input 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="+38267611334" 
                        id='surname' 
                        type="text" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="postalCode" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.POSTAL_CODE}
                    </label>
                    <input 
                        value={postalCode} 
                        onChange={(e) => setPostalCode(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="" 
                        id='postalCode' 
                        type="text" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" 
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="postalCode" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.DIETARY}
                    </label>
                    <input 
                        value={dietary} 
                        onChange={(e) => setDietary(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="" 
                        id='dietary' 
                        type="text" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" 
                        required
                    />
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div class="mb-6">
                    <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.LAST_NAME}
                    </label>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} style={{ backgroundColor: "#2e80f10d"}} placeholder="" type="text" id="surname" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" required/>
                </div>
                <div class="mb-6">
                    <span for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.COUNTRY}
                    </span>
                    <DropDownList 
                        placeholder='Select your country'
                        options={countriesArray} 
                        selectedValue={country} 
                        onValueChange={onCountryChange} 
                    />                                            
                </div>
                <div class="mb-6">
                    <label for="organisation" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.UNIVERSITY}
                    </label>
                    <input 
                        value={organisation} 
                        onChange={(e) => setOrganisation(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="" 
                        type="text" 
                        id="organisation" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" 
                        required
                    />
                </div>
                <div class="mb-6 flex flex-row-reverse gap-4 pt-10 pl-1">
                    <label for="organisation" class="block mb-2 text-xs font-medium text-gray-400 ">
                        Invitation letter needed for Visa issue to enter Montenegro
                    </label>
                    <div className=''>
                        <Switch onChange={() => setInvitationLetter(!invitationLetter)} checked={invitationLetter} />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 p-4 relative'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.EMAIL}
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: "#2e80f10d"}} placeholder="example@gmail.com" type="text" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" required/>
                </div>
                <div class="mb-6">
                    <label for="surname" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.CITY}
                    </label>
                    <input 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="" 
                        type="text" 
                        id="city" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" 
                        required
                    />                                           
                </div>
                <div class="mb-6">
                    <label for="adress" class="block mb-2 text-xs font-medium text-gray-400 ">
                        {RegistrationPageLabels.ADDRESS}
                    </label>
                    <input 
                        value={adress} 
                        onChange={(e) => setAdress(e.target.value)} 
                        style={{ backgroundColor: "#2e80f10d"}} 
                        placeholder="" 
                        type="text" 
                        id="adress" 
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400" 
                        required
                    />
                </div>
            </div>
            
        </div>
    )
}

export default PersonalInfo;

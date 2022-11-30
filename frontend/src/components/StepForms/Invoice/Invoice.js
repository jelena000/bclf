import React from 'react'
import { RegistrationPageLabels} from '../../../_constants/labels';
import DropDownList from '../../DropDownList';
import COUNTRIES from '../../../_constants/countries';

const countriesArray = COUNTRIES.map((c) => ({ 
    label : c.name, 
    value: c.code
}));

const Transfers = (
    { 
        invoiceIssue, 
        setInvoiceIssue, 
        invoiceCompany,
        setInvoiceCompany,
        invoiceCountry,
        setInvoiceCountry,
        invoiceCity,
        setInvoiceCity,
        invoiceAdress,
        setInvoiceAdress,
        invoiceRegNum,
        setInvoiceRegNum,
        invoiceTax,
        setInvoiceTax,
    }) => {

    return (
        <div className=''>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="surname" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.INVOICE_TO}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <DropDownList
                            placeholder='Choose' 
                            options={[{label:'Yes', value: 'Yes'},{label:'No', value: 'No'}]} 
                            selectedValue={invoiceIssue} 
                            onValueChange={setInvoiceIssue} 
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceCompany" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.COMPANY}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <input 
                            value={invoiceCompany} 
                            onChange={(e) => setInvoiceCompany(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="invoiceCompany" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceCountry" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.INVOICE_COUNTRY}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <DropDownList
                            placeholder='Choose' 
                            options={countriesArray} 
                            selectedValue={invoiceCountry} 
                            onValueChange={setInvoiceCountry} 
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceCity" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.INVOICE_CITY}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <input 
                            value={invoiceCity} 
                            onChange={(e) => setInvoiceCity(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="invoiceCity" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceAdress" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.INVOICE_ADDRESS}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <input 
                            value={invoiceAdress} 
                            onChange={(e) => setInvoiceAdress(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="invoiceAdress" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class="w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceRegNum" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.REG_NUM}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <input 
                            value={invoiceRegNum} 
                            onChange={(e) => setInvoiceRegNum(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="invoiceRegNum" 
                            style={{ backgroundColor: "#2e80f10d"}} 
                            class="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        /> 
                    </div>
                </div>
            </div>
            <div className='row w-full'>
                <div class=" w-full p-4 flex flex-wrap items-center">
                    <div className='w-full md:w-1/6'>
                        <label for="invoiceTax" class="block  text-sm font-medium text-gray-400 pr-3">
                            {RegistrationPageLabels.VAT_TAX}
                        </label>
                    </div>
                    <div className='w-full md:w-5/6'>
                        <input 
                            value={invoiceTax} 
                            onChange={(e) => setInvoiceTax(e.target.value)} 
                            placeholder="" 
                            type="text" 
                            id="invoiceTax" 
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

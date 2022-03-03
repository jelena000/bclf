import React from 'react'

const members = [
    {
        name: 'Members BSCL',
        earlyPrice: '85$',
        latePrice: '185$',
    },
    {
        name: 'Non members BSCL ',
        earlyPrice: '40$',
        latePrice: '123$',
    },
    {
        name: 'Online',
        earlyPrice: '3225$',
        latePrice: '9224$',
    },
]
  
export default function RegistrationTable({ registrationPlan, setRegistrationPlane }) {

    const isChecked = (member, price) => {
        if(!registrationPlan) return false;

        return member.name === registrationPlan.name && registrationPlan.price === price;
    }

    const onChangePrice = (price, name) => {
        setRegistrationPlane({
            price, 
            name
        })
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 shadow-2xl">
                            <thead className="bg-blue-500">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-white  tracking-wider  text-center"
                                >
                                    Registration Fee
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-white  tracking-wider  text-center"
                                >
                                    Early Bird Registration Till June 30, 2022
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-white  tracking-wider  text-center"
                                >
                                    Late Registration From June 30, 2022
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {members.map((m) => (
                                    <tr key={m.name}>
                                        <td className="px-6 py-4 whitespace-nowrap  text-center">
                                            <div className="flex items-center justify-center">
                                                <div className="text-sm font-medium text-gray-900">{m.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left">
                                            <div className="form-check " style={{ marginLeft: '40%'}}>
                                                <input 
                                                    type="radio" 
                                                    value={m.earlyPrice} 
                                                    name="gender" 
                                                    className="mr-2" 
                                                    id="radio1"
                                                    checked={isChecked(m,m.earlyPrice)}
                                                    onChange={(e) => onChangePrice(e.target.value, m.name)}
                                                /> 
                                                <label className="form-check-label inline-block text-gray-800 text-sm"  htmlFor="radio1">
                                                    {m.earlyPrice}
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left">
                                            <div className="form-check " style={{ marginLeft: '40%'}}>
                                                <input   
                                                    type="radio" 
                                                    value={m.latePrice} 
                                                    name="radio" 
                                                    className="mr-2" 
                                                    id="radio2" 
                                                    checked={isChecked(m,m.latePrice)}
                                                    onChange={(e) => onChangePrice(e.target.value, m.name)}
                                                /> 
                                                <label className="form-check-label inline-block text-gray-800 text-sm" htmlFor="radio2">
                                                    {m.latePrice}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
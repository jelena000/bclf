import React from 'react'
import RegistrationTable from './Table';

const RegistrationForm = ({ registrationPlan, setRegistrationPlane }) => {
    return (
        <div className='px-5 py-10'>
            <RegistrationTable 
                registrationPlan={registrationPlan} 
                setRegistrationPlane={setRegistrationPlane}
            />
        </div>
    )
}

export default RegistrationForm;

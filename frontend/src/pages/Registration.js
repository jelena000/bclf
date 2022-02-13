import React, { useState } from 'react'
import axios from 'axios'
import {constants} from '../_constants/constants'
import Header from '../components/Header/Header';

export const Registration = () => {
    const [loading, setloading] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const submit = async () => {
        await setloading(true);

        const data = {
            name,
            surname,
            email
        };

        axios.post('/api/register', data)
        .then(res => {
            setloading(false);

            const server_data = res.data;
            console.log({server_data});
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
        }
        ,error => {
            setloading(false);
            console.log({error});
        });
    }

    return (
        <div className="home-root">
			<div className="home-main bg-gray-50 pb-20 min-h-screen">
				<Header  />
				<div className='w-3/4 m-auto pt-20 '>
                    <div className='max-w-lg'>
                        <div>
                            {loading ? 'loading' : null}
                        </div>
                        <form>
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ime" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div class="mb-6">
                                <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your surname</label>
                                <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Prezime" id='surname' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id='email' type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <button onClick={submit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">REGISTER</button>
                        </form>
                    </div>
				</div>
			</div>
		</div>
        
    )
}

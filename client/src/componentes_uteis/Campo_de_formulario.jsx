import React from 'react';
import { preview } from '../assets';

const Campo_de_formulario = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {






    return (
        <div className="flex flex-col items-start gap-2 mb-2">


            <div className="flex items-center w-full gap-6 flex justify-center items-center">
                <label htmlFor={name} className="block text-sm font-medium text-gray-900">

                </label>

                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    >
                        Gerar prompt aleatório
                    </button>
                )}
            </div>

            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className=" mt-2 px-5 block w-full min-w-[350px] p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                style={{ width: '40%' }}
            />

        </div>


    );
}

export default Campo_de_formulario;










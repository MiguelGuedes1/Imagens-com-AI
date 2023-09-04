import React from 'react';
import { preview } from '../assets';

const Campo_de_formulario = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {






    return (
        <div className="flex flex-col items-start gap-2 mb-2">


            <div className="flex items-center w-full gap-6">
                <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                    {labelName}
                </label>

                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs bg-[#ECECF1] py-1 px-3 rounded-[5px] text-black"
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
                className=" px-5 block w-full min-w-[350px] p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                style={{ width: '40%' }}
            />

        </div>


    );
}

export default Campo_de_formulario;










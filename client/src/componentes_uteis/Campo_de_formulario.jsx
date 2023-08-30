import React from 'react';
import { preview } from '../assets';

const Campo_de_formulario = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    console.log('FormField value:', value); // Verifique o valor que está sendo passado





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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none p-3"
                style={{ width: '100%' }}
            />

        </div>


    );
}

export default Campo_de_formulario;










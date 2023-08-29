import React from 'react';

const Botao_de_download = () => (
    <div className="flex items-center justify-center">
        <svg
            className="animate-spin h-9 w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle cx="12" cy="12" r="10" fill="#BFDBFE" />
            <path
                d="M12 4C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10"
                stroke="#60A5FA"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

export default Botao_de_download;


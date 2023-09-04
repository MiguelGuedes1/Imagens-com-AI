import React from 'react'

import { botao_download } from '../assets'
import { downloadImage } from '../funcoesUteis'
import { FaDownload } from 'react-icons/fa'






const Card = ({ _id, name, prompt, photo }) => {


    return (
        <div className="group relative rounded-xl shadow-card hover:shadow-cardhover transform transition-transform hover:scale-105 hover:border-purple-500 hover:border-2 card mb-4 mr-5">
            <img
                className="w-full h-auto object-cover rounded-xl"
                src={photo}
                alt={prompt}
            />

            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md" style={{ border: "1px solid purple" }}>

                <p className=" text-[#8B008B] text-xs overflow-y-auto prompt  ">
                    Prompt usado : {prompt}
                </p>

                <div className="mt-2 flex justify-between items-center gap-2">
                    <div className="flex flex-col  ">
                        <div>
                            <p className="text-xs  text-[#8B008B] mb-2">Criado por : {name}</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => downloadImage(_id, photo)}
                            className="outline-none bg-transparent border-none flex items-center "
                        >
                            <FaDownload color="white" />

                        </button>
                    </div>

                    <button>

                    </button>
                </div>

            </div>

        </div>


    )
}

export default Card
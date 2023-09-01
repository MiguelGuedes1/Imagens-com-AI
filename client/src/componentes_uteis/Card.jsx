import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../funcoesUteis'






const Card = ({ _id, name, prompt, photo }) => {


    return (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card mb-4 mr-5 ">
            <img
                className="w-full h-auto object-cover rounded-xl"
                src={photo}
                alt={prompt}
            />

            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">

                <p className="text-white text-xs overflow-y-auto prompt ">
                    {prompt}
                </p>

                <div className="mt-5 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="text-sm text-white">Criado por: {name}</p>
                        </div>
                    </div>

                    <button>

                    </button>
                </div>

            </div>

        </div>


    )
}

export default Card
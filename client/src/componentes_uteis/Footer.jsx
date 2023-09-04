import React from 'react'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'

const Footer = () => {


    return (
        <div>

            <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-10">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 PixelGenius. Developed by Miguel Guedes
                    </span>

                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-5 ">

                        <li>
                            <a href="https://github.com/MiguelGuedes1"
                                className="text-[#333] hover:scale-105 transition-transform duration-300"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 hover: inline-block mr-1 transform scale-100 hover:scale-105" />

                            </a>
                        </li>



                        <li>
                            <a href="https://www.linkedin.com/in/miguel-guedes1/"
                                className="text-[#333] hover:scale-105 transition-transform duration-300"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin className="w-6 h-6 hover: inline-block mr-1 transform scale-100 hover:scale-105" />

                            </a>
                        </li>


                        <li>
                            <a href="https://github.com/MiguelGuedes1/Imagens-com-AI"
                                className="text-[#333] hover:scale-105 transition-transform duration-300"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLink className="w-6 h-6 hover: inline-block mr-1 transform scale-100 hover:scale-105" />

                            </a>
                        </li>





                    </ul>

                </div>
            </footer>

        </div>
    )
}

export default Footer
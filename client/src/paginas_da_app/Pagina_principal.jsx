// Pagina para principal da app (HomePage)

import React, { useState, useEffect } from 'react'
import { Card, Campo_de_formulario, Botao_de_download } from "../componentes_uteis"
import { preview, video_fundo } from '../assets'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//css 
import '../index.css';



const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />)
    }

    return (
        <h2 className="mt-5 font bold text-[#6449ff] text-medium uppercase">
            {title}
        </h2>
    )
}




const Pagina_principal = () => {

    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState([])
    const [searchText, setSearchText] = useState('')

    const [searchedResults, setSearchedResults] = useState(null)
    const [searchTimeout, setSearchTimeout] = useState(null)

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true)

            try {
                const response = await fetch('http://localhost:8080/api/v1/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                })

                if (response.ok) {
                    const result = await response.json()
                    setAllPosts(result.data.reverse())
                }


            } catch (error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()

    }, [])

    const pesquisar_por_um_prompt = (e) => {

        clearTimeout(searchTimeout)

        setSearchText(e.target.value)

        setSearchTimeout(
            setTimeout(() => {

                const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
                    item.prompt.toLowerCase().includes(searchText.toLowerCase()))

                setSearchedResults(searchResults)


            }, 500)
        )

    }








    return (

        <section className="flex flex-col">

            <div className="video_fundo">

                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '60%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={video_fundo} type="video/mp4" />
                </video>

                <div className="titulos">
                    <h1 className=" mt-5 font-extrabold text-[#8B008B] text-[40px] animate-fade  xs:text-[80px]">PixelGenius</h1>



                    <p className=" text-[#8B008B] text-[10px]  xs:text-[18px]  ">
                        Navegue por imagens fantasticas criadas por AI
                    </p>

                    <Link to="create-post"
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"

                    >
                        Cria um post
                    </Link>
                </div>




            </div>






            <div className=" px-20">

                <div className="mt-8 mb-8 flex justify-center items-center text-center px-20">
                    <Campo_de_formulario
                        type="text"
                        name="text"
                        placeholder="Procure por um prompt ou por criador"
                        value={searchText}
                        handleChange={pesquisar_por_um_prompt}

                    />
                </div>

                {loading ? (                                                       /* Usar operador ternario para verificar se esta a ocorrer um Loading  */
                    <div className="flex justify-center itens-center">
                        <Botao_de_download />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font medium text -[#666e75] text -xl mb3">
                                Resultados para <span className="text-[#222328]">
                                    {searchText}
                                </span>
                            </h2>
                        )}


                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap -3 ">
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="Sem resultados para a pesquisa"
                                />
                            ) : (
                                <RenderCards
                                    data={allPosts}
                                    title="Nenhum post criado ainda"
                                />
                            )

                            }
                        </div>
                    </>
                )

                }

            </div>




        </section>
    );
};

export default Pagina_principal;
// Pagina para criar posts

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../funcoesUteis'
import { Campo_de_formulario, Botao_de_download, } from '../componentes_uteis'

const Criar_um_post = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })

    const [gerar_imagem, setGerarImagem] = useState(false)
    const [loading, setLoading] = useState(false)



    const generateImage = async () => {
        if (form.prompt) {
            try {
                setGerarImagem(true)
                const response = await fetch('http://localhost:8080/api/v1/imagens_AI', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ prompt: form.prompt }),
                });

                console.log('API response:', response)

                const data = await response.json()

                console.log("A foto em formato json é a seguinte: ", data)


                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo.data[0].b64_json}` })



            } catch (error) {
                alert(error)
            } finally {
                setGerarImagem(false)
            }
        } else {
            alert("Por favor insira um prompt ou clique no botao Surpreeda-me")
        }
    };






    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.prompt && form.photo) {
            setLoading(true)

            try {
                const response = await fetch('http://localhost:8080/api/v1/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                })

                await response.json()
                navigate('/')

            } catch (error) {
                alert(error)

            } finally {
                setLoading(false)

            }

        } else {
            alert("Insira um prompt para a imagem ser gerada")
        }
    }




    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }





    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt)
        console.log('Random Prompt:', randomPrompt)
        setForm({ ...form, prompt: randomPrompt })
    }








    return (

        <section className="max-w-7xl mx-auto mr-7 ml-7 ">


            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]  ">Crie um Post</h1>
                <p className=" text-[#666e75] text-[14.5px] max-w-[500px]">
                    Crie imagens fantasticas geradas por inteligência artificial
                </p>
            </div>


            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-8">
                    <Campo_de_formulario
                        labelName="Nome"
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome "
                        Value={form.name}
                        handleChange={handleChange}

                    />

                    <Campo_de_formulario
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="Insira palavras para criar a sua imagem, nós fazemos o resto :) "
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-3 h-80
                    flex justify-center itens-center">         {/* Div onde aparece a imagem que o utilizador cria */}

                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.prompt}
                                className="w-full h-full object-contain"

                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-9/12 h-9/12 object-contain opacity-40"

                            />
                        )}

                        {gerar_imagem && (
                            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                                <Botao_de_download />
                            </div>
                        )}

                    </div>
                </div>

                <div className="mt-5 flex gap-5">
                    <button
                        type="button"
                        onClick={generateImage}
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"

                    >

                        {gerar_imagem ? (
                            'A criar a sua imagem ...'
                        ) : (
                            'Criar Imagem'
                        )}

                    </button>

                </div>


                <div className="mt-10">

                    <p className="mt-2 text-[#666e75] text-[14px]">Se desejar partilhe com a comunidade a sua imagem</p>

                    <button
                        type='submit'
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
                    >
                        {loading ? (
                            "A partilhar a sua imagem . . ."
                        ) : (
                            "Partilhar imagem"
                        )}

                    </button>

                </div>



            </form>

        </section>
    )
}

export default Criar_um_post












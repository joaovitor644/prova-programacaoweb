
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Carrocel from '../components/Carrocel'
import axios from 'axios'
import { Form } from "react-router-dom";
const key = import.meta.env.VITE_API_KEY
const urlData = "https://api.themoviedb.org/3/discover/movie?api_key="+key+"&with_genres="

export default function Films(){

    const [data,setData] = useState([]);

    const response = async () => {
        try {
            const res =await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+key+"&language=pt-BR&region=BR")
            setData(res.data.genres)
            console.log(res.data.genres)
            console.log(data)
        } catch (error) {
            console.log("houve um erro na requisição")
        }
    }

    useEffect(() =>{
        response()
    }, [])

    return (
        <>
           <Banner content={
                <>
                <h1>Filmes</h1>
                <Form action="/search" method="get">
                    <label className='search-bar'>
                    <input dir="auto" id="search" name="keyword" type="text" tabindex="1"  placeholder="Buscar por um Filme" />
                    <input type="hidden" value="film" name='type'/>
                    <input type="submit" id="subSearch"value="Search" />
                </label>
                </Form>
                
                    {data.length == 0? console.log("Carregando..") : (
                        data.map(gen => {
                            return (
                                <Carrocel title={gen.name} url={urlData + gen.id + "&language=pt-BR&region=BR"} type="Film"/>
                            ) 
                        })
                    )}
                </>
            } />
        <Footer 
                aboutUrl="/about"
                contactUrl="/contact"
                filmsUrl="/films"
                seriesUrl="/series"
            /> 
        </>
        
    )
}
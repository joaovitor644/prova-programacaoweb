import axios from "axios";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect} from 'react'
import Item from "../components/Item";
import { Form } from "react-router-dom";
const key = import.meta.env.VITE_API_KEY

export default function Search(props){
    const sendData = useLoaderData()
    const [dataSearch,setDataSearch] = useState([])
    const [results,setResults] = useState([])
    const request = async (type,query) => {
        var i = 0;
        try{
            if(type == "film"){
                const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query="+query+"&language=pt-BR&region=BR&page=5")
                await setDataSearch(response.data.results)
            } else {
                const response = await axios.get("https://api.themoviedb.org/3/search/tv?api_key="+key+"&language=en-US&query="+query+"&language=pt-BR&region=BR&page=5")
                await setDataSearch(response.data.results)
            }
        } catch(erro){
            console.log(erro)
        }
    }
    useEffect(() => {
        request(sendData.type,sendData.keyword)
    }, [])
    return (
        <>
            <Banner content={
                <>
                    <h1>Pesquisado: "{sendData.keyword}" </h1>

                    <div id="containerSearch">
                    {
                        dataSearch.length == 0?  <h1>Nenhum resultado encontrado</h1>: (
                            dataSearch.map(elem => {
                                if(elem.poster_path && dataSearch.length != 0){
                                    return (
                                        <Item 
                                            name={sendData.type == "film"? elem.title : elem.name}  
                                            img={"https://image.tmdb.org/t/p/w500" + elem.poster_path} 
                                            aval={elem.vote_average}
                                            linkinfo={sendData.type == "film"? "/filminfo/" + elem.id : "/serieinfo/" + elem.id}
                                        /> 
                                    )
                                }
                                
                            })
                        )
                    }
                    </div>
                </>
            } />
            <Footer 
                aboutUrl="/about"
                contactUrl="/contact"
                filmsUrl="/films"
                seriesUrl="/series"
            /> 
        </>       
    );
}
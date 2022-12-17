import Banner from "../components/Banner";
import Footer from '../components/Footer';
import axios from  'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import starIcon from  '../assets/star.png'
import "../components/css/filmInfo.css"

const key = import.meta.env.VITE_API_KEY


export default function FilmInfo(props){
    const {id} = useParams()
    const reqUrl = "https://api.themoviedb.org/3/tv/"+id+"?api_key="+key+"&language=pt-BR&region=BR"
    const reqUrl2 = "https://api.themoviedb.org/3/tv/"+id+"/content_ratings?api_key="+key+"&language=pt-BR&region=BR"
    const [dataMovie,setDataMovie] = useState([])
    const [dataMovie2,setDataMovie2] = useState([])
    const [date,setDate] = useState([])

    const response = async () => {
        try {
            const res = await axios.get(reqUrl)
            const res2 = await axios.get(reqUrl2)
            await setDataMovie(res.data)
            await setDate(res.data.last_air_date.split('-'))

            res2.data.results.map(elem => {
                if(elem.iso_3166_1 == "BR"){
                    setDataMovie2(elem.rating)
                }
                console.log(elem)
            })
            
            await console.log(date)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        response()
    } , [])
    const formatDate = date[2] + "/" + date[1] + "/" + date[0]

    if(id){
        return (
            <>
                <Banner content={
                    <div className="container-Info">
                        <div className="imgInfo">
                            <img src={"https://image.tmdb.org/t/p/w500" + dataMovie.poster_path} id="poster"/>
                            <div className="infoFilm">
                                <span id="classificate">{dataMovie2}</span>
                                <span>Lançado:{formatDate}</span>
                                <span><img src={starIcon}/>{dataMovie.vote_average}</span>
                                <div id="genInfo">
                                    Gêneros:
                                    {
                                        dataMovie.length == 0? console.log("carregando") : (
                                            dataMovie.genres.map(elem => {
                                                return (
                                                    <span>{elem.name}</span>
                                                );
                                            })
                                        )
                                        
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="containerFilm">
                            <h2>{dataMovie.name}</h2>
                            <p>{dataMovie.overview == ""? "Não há descrição" : dataMovie.overview}</p>
                        </div>
                    </div>
                } />
                <Footer 
                    aboutUrl="/about"
                    contactUrl="/contact"
                    filmsUrl="/films"
                    seriesUrl="/series"
                /> 
            </>
        );
    } else {
        return <h1>Erro 404</h1>
    }
    
}
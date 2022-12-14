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
    const reqUrl = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+key+"&language=pt-BR&region=BR"
    const reqUrl2 = "https://api.themoviedb.org/3/movie/"+id+"/release_dates?api_key=" + key
    const [dataMovie,setDataMovie] = useState([])
    const [dataMovie2,setDataMovie2] = useState([])
    const [date,setDate] = useState([])

    const response = async () => {
        try {
            const res = await axios.get(reqUrl)
            const res2 = await axios.get(reqUrl2)
            await setDataMovie(res.data)
            await setDate(res.data.release_date.split('-'))

            res2.data.results.map(elem => {
                if(elem.iso_3166_1 == "BR"){
                    setDataMovie2(elem.release_dates[0].certification)
                } else {
                    setDataMovie2(elem.release_dates[0].certification)
                }
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
                            <h2>{dataMovie.title}</h2>
                            <p>{dataMovie.overview}</p>
                        </div>
                    </div>
                } />
                <Footer />
            </>
        );
    } else {
        return <h1>Erro 404</h1>
    }
    
}
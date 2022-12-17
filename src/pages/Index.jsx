import Banner from '../components/Banner'
import Carrocel from '../components/Carrocel';
import Footer from '../components/Footer';
import { Form } from 'react-router-dom';
const key = import.meta.env.VITE_API_KEY 

const urlCarrocelFilm = "https://api.themoviedb.org/3/movie/popular?api_key="+ key + "&language=pt-BR&page=1&region=BR"
const urlCarrocelSerie = "https://api.themoviedb.org/3/tv/popular?api_key="+ key + "&language=pt-BR&page=1&region=BR"

export default function Index(){
    return (
        <>
            <Banner content={
              <Form action="/search" method="get">
                <h2>Bem-Vindo(a) Ao FilmsAndSeries.</h2>
                <h3>Milhões de Filmes e Séries  para Descobrir. Explore já.</h3>
                <label className='search-bar'>
                <input dir="auto" id="search" name="keyword" type="text" tabindex="1"  placeholder="Buscar" />
                <label htmlFor="">Pesquisar por: Filme</label>
                <input type="radio" value="film" name='type' checked/>
                <label htmlFor="">Série</label>
                <input type="radio" value="serie" name='type'/>
                <input type="submit" id="subSearch"value="Search" />
                </label>
              </Form>
            }/>
            <Carrocel title="Filmes Populares" url={urlCarrocelFilm} type="Film"/>
            <Carrocel title="Series Populares" url={urlCarrocelSerie} type="Series"/>
           
            <Footer 
                aboutUrl="/about"
                contactUrl="/contact"
                filmsUrl="/films"
                seriesUrl="/series"
            /> 
        </>
    );
}
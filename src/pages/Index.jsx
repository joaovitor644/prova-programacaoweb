import Banner from '../components/Banner'
import Carrocel from '../components/Carrocel';
import Footer from '../components/Footer';

const key = import.meta.env.VITE_API_KEY 

const urlCarrocelFilm = "https://api.themoviedb.org/3/movie/popular?api_key="+ key + "&language=pt-BR&page=1&region=BR"
const urlCarrocelSerie = "https://api.themoviedb.org/3/tv/popular?api_key="+ key + "&language=pt-BR&page=1&region=BR"

export default function Index(){
    return (
        <>
            <Banner content={
              <form id="search_form" action="/search" method="get" accept-charset="utf-8">
                <h2>Bem-Vindo(a).</h2>
                <h3>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h3>
                <label className='search-bar'>
                  <input dir="auto" id="search"  type="text" tabindex="1"  placeholder="Buscar por um Filme ou Série" />
                  <input type="submit" id="subSearch"value="Search" />
                </label>
              </form>
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
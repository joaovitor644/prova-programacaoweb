import Navbar from './Navbar'
import './css/Banner.css'

export default function Banner(){
    return (
        <div className="Lpage">
            <Navbar />
            <div class="content">
              <form id="search_form" action="/search" method="get" accept-charset="utf-8">
                <h2>Bem-Vindo(a).</h2>
                <h3>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h3>
                <label className='search-bar'>
                  <input dir="auto" id="search"  type="text" tabindex="1"  placeholder="Buscar por um Filme, Série ou Pessoa..." />
                  <input type="submit" value="Search" />
                </label>
              </form>
            </div>
        </div>
    )
}
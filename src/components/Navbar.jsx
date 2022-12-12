import './css/Navbar.css'
import menuIcon from "../assets/menu.png"
import mainIcon from "../assets/main.ico"
export default function Navbar(props){
    if(props.type == "search"){
            return (
            <>
            <input type="checkbox" name="" id="check" checked="false"/>
            <nav className='menu'>
                <p><a href='/'><img src={mainIcon} alt="" srcset="" /></a></p>
                    <div className='container-nav'>
                        <label htmlFor="check"><img src={menuIcon}/></label>
                        
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href={props.aboutUrl}>About us</a></li>
                            <li><a href={props.contactUrl}>Contact us</a></li>
                            <li><a href={props.filmsUrl}>Filmes</a></li>
                            <li><a href={props.seriesUrl}>Tv Series</a></li>
                            <li>
                                <form action="/search" method="get" accept-charset="utf-8" id='search-form'>
                                    <input dir="auto" name="key" id="searchBar"  type="text" tabindex="1"  placeholder="Buscar por um Filme ou Série " />
                                    <input type="submit" value="Search"  id="subSearch" /> 
                                </form> 
                            </li>
                        </ul>
                        
                    </div>
            </nav>
            </>
            
        );
    } else {
        return (
            <>
            <input type="checkbox" name="" id="check" checked="false"/>
            <nav className='menu'>
                <p><a href='/'><img src={mainIcon} alt="" srcset="" /></a></p>
                    <div className='container-nav'>
                        <label htmlFor="check"><img src={menuIcon}/></label>        
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href={props.aboutUrl}>About us</a></li>
                            <li><a href={props.contactUrl}>Contact us</a></li>
                            <li><a href={props.filmsUrl}>Filmes</a></li>
                            <li><a href={props.seriesUrl}>Tv Series</a></li>
                            
                        </ul>
                        
                    </div>
            </nav>
            </>
        )
    }
    
}
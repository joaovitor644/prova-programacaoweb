import './css/Navbar.css'
import menuIcon from "../assets/menu.png"

export default function Navbar(){
    return (
        <>
        <input type="checkbox" name="" id="check" checked="false"/>
        <nav className='menu'>
            <p>Main</p>
                <div className='container-nav'>
                    <label htmlFor="check"><img src={menuIcon}/></label>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Tv Series</a></li>
                    </ul>
                </div>
                
        </nav>
        </>
        
    );
}
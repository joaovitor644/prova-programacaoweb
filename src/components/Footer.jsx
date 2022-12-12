import './css/Footer.css'

export default function Footer(props){
    return (
        <footer className='footer-page'>
            <ul>
                <li><a href={props.aboutUrl}>About us</a></li>
                <li><a href={props.contactUrl}>Contact us</a></li>
                <li><a href={props.filmsUrl}>Filmes</a></li>
                <li><a href={props.seriesUrl}>Tv Series</a></li>
            </ul>
            <p>Copyright filmsAndSeries 2022</p>
        </footer>
    );
}
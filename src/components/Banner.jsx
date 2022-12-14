import Navbar from './Navbar'
import Section from './Section'
import './css/Banner.css'

export default function Banner(props){
    return (
        <div className="Lpage">
            <Navbar
              type={props.navType} 
              aboutUrl="/about"
              contactUrl="/contact"
              filmsUrl="/films"
              seriesUrl="/series"
            />
            <div class="content">
              <Section content={props.content}/>
            </div>
        </div>
    )
}
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
            />
            <div class="content">
              <Section content={props.content}/>
            </div>
        </div>
    )
}
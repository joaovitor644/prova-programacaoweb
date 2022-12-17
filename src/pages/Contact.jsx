import Footer from "../components/Footer";
import Banner from "../components/Banner";
import '../components/css/Form.css'

export default function Contact(){
    return (
        <>
            <Banner content={
                <>
                    
                    <form action="#" method="post" id="formContact">
                    <h2>Contact Us</h2>
                    <p>Problemas no site? Recomendações de filmes ou séries? Fale conosco.</p>
                        <label htmlFor="">Name</label>
                        <input type="text" name='nome'/>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email'/>
                        <label htmlFor="">Assunto</label>
                        <input type="text" name='assunto'/>
                        <label htmlFor="">Texto</label>
                        <textarea name="texto" id="" cols="30" rows="10" >
                        </textarea>
                        <input type="submit" value="Search" />
                    </form>
                </>
            } navType="#"/>
            <Footer 
                aboutUrl="/about"
                contactUrl="/contact"
                filmsUrl="/films"
                seriesUrl="/series"
            /> 
        </>
    )   
}
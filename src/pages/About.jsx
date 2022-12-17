import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function About(){
    return (
        <>
            <Banner content={
                <>
                    <h2>About</h2>
                    <p>FilmsAndSeries é um site que fornece dados atualizados de mais de diversos filmes e séries desde lança mentos a avaliações. Nós utilizamos a base de dados do "The Movie Database" para trazer contéúdos de forma autêntica , segura e precisa</p>
                </>
            } style="height:80"
             navType="#"
            />
            <Footer 
                aboutUrl="/about"
                contactUrl="/contact"
                filmsUrl="/films"
                seriesUrl="/series"
            /> 
        </>
    );
}
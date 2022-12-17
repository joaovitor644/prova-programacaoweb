import './css/Carossel.css'
import Item from './Item';
import { useRef ,useState,useEffect } from 'react';
import axios from 'axios';



export default function  Carrocel(props) {
const [data,setData] = useState([]);
    if(document.width ){

    }
    const response =async () => {
        try {
            const res =await axios.get(props.url)
            await setData(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.log("houve um erro na requisição")
        }
    }

    useEffect( () => {
        response()
    }, []);

    const carrocel = useRef(null);

    const arrowLeftControl = (e) => {
        e.preventDefault();
        console.log(carrocel.current)
        carrocel.current.scrollLeft -= carrocel.current.offsetWidth / 4
    }

    const arrowRightControl = (e) => {
        e.preventDefault();
        console.log(carrocel.current)
        carrocel.current.scrollLeft += carrocel.current.offsetWidth / 4
    }

    return (
        <>
        <h1>{props.title}</h1>
         <div className="container">
                <button className="arrow-left control" aria-label="Previous image" onClick={arrowLeftControl}>◀</button>
                <button className="arrow-right control" aria-label="Next Image" onClick={arrowRightControl}>▶</button>
                <div className="gallery-wrapper" ref={carrocel}>
                    <div className="gallery" >
                        {
                            
                            data.length == 0? console.log(data) : (
                                data.map((elem) => {
                                    if(elem.poster_path != null  && elem.vote_average != 0){
                                        return (
                                            <Item 
                                                name={props.type == "Film"? elem.title : elem.name}  
                                                img={"https://image.tmdb.org/t/p/w500" + elem.poster_path} 
                                                aval={elem.vote_average}
                                                linkinfo={props.type == "Film"? "/filminfo/" + elem.id : "/serieinfo/" + elem.id}
                                            />
                                        )
                                    }
                                })
                            )
                        }                            
                    </div>
                </div>
            </div>
        </>   
    );
}
import './css/Item.css'
import starIcon from  '../assets/star.png'

export default function Item(props){
    return (
        <div className='card'>
            <a href={props.linkinfo}><img src={props.img} alt="" /></a>
            <div className='cardInfo'>
                <span>{props.name}</span>
                <span><img className='star' src={starIcon} />{props.aval}</span>
            </div>
        </div>
    );
} 
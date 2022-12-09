import './css/Item.css'

export default function Item(props){
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <div className='cardInfo'>
                <span>{props.name}</span>
                <span>{props.aval}</span>
            </div>

        </div>
    );
} 
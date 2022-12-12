import './css/Section.css'

export default function Section(props){
    return (
        <section>
            <article>
               {props.content}
            </article>
        </section>
    );
}
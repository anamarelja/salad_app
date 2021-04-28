import './salad.scss'

const Salad = (props) => {

    console.log(props.salad)

    return ( 
        <div className="Salad">
            <img src={props.salad.img} alt="salad_picture"/>
            <p>{props.salad.name}</p>
            <p>{props.salad.kcal}</p>
            <div>
                {props.salad.ingredients.map((e)=>{
                    return <div>{e}</div>
                })}
            </div>
            <div>
                {props.salad.tags.map((e)=>{
                    return <p>{e}</p>
                })}
            </div>
        </div>
     );
}
 
export default Salad;
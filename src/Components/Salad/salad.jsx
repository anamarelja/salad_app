import './salad.scss'

const Salad = (props) => {

    console.log(props.salad)

    return ( 
        <div className="Salad">
            <img src={props.salad.img} alt="salad_picture"/>
            <p className="SaladTitle">{props.salad.name}</p>
            <p className="SaladKCal">{props.salad.kcal} calories</p>
            <p className="ingredients">Ingredients :</p>
            <div className="ingredients"> 
                {props.salad.ingredients.map((e)=>{
                    return <div>{e} / </div>
                })}
            </div>
            <div className="SaladTags">
                {props.salad.tags.map((e)=>{
                    return <p className="Tag"><i> {e} </i></p>
                })}
            </div>
        </div>
     );
}
 
export default Salad;
import "./Button.css"
function Button(props){
    return <>
        <button 
        onClick={props.handleClick} 
        className={props.className ? props.className : "btn"} 
        id={props.btnId}>{props.btnName}
        </button>
    </>
}

export default Button;

interface IText{
    text:string,
    color:string,
    textFont:string,
    textSize:string
}

function Text(props:IText) {
    return ( 
        <div className={`${props.color} ${props.textFont} ${props.textSize}`}>
       {props.text}
        </div>
     );
}

export default Text;

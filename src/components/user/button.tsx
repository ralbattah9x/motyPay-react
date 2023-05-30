
interface IButton{
    text:string,
    color:string,
    textColor:string,
    buttonSize:string,
    onClick: React.MouseEventHandler<HTMLDivElement>,
}

function Button(props:IButton) {
    return ( 
        <div onClick={props.onClick} className={`${props.buttonSize} sm:w-[100px] font-subTitle text-[14px] rounded-[50px] cursor-pointer flex justify-center items-center ${props.color} ${props.textColor}`}>
            {props.text}
        </div>
     );
}

export default Button;
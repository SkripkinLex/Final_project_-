import "./Button.css"

function Button (props){
    const {title, color, font, style, ...otherProps} = props
    return (
        <button {...otherProps} className={`btn_elem ${color} ${style} ${font}`}>{title}</button>
    )
}

export default Button

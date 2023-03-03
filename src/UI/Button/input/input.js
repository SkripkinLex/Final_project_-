import './input.css'

function Input(props){

    const {title, color, font, style, ...otherProps} = props
    return(
        <input {...otherProps} className={`input_elem ${color} ${style} ${font}`} />
    )
}

export default Input
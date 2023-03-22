import { useDispatch } from "react-redux"
import { baseUrl } from "../.."
import { decrProduktAction, incrProductAction, remProductAction } from "../store/basketReducer"
import {ReactComponent as Svgcloset} from '../media/closet.svg'
import './Cartitem.css'
import {ReactComponent as Svgplus} from './../media/plus.svg'
import {ReactComponent as Svgminus} from './../media/minus.svg'


function Cartitem(props){
    const {id, title, url, count, price, discont_price} = props

    const dispatch = useDispatch()

    return(
        <div className="cart_elem">
            <img className="cart_elem_img" alt="" width={200} height={200} src={`${baseUrl}${url}`}/>
            <div className="cart_title_wrapper">
                <h2 className="cart_title_elem">{title}</h2>
                <div className="btns_wrapper">
                    <button className="btn_cart cart_minus" onClick={() => dispatch(decrProduktAction(id))}><Svgminus/></button>
                    <p>{count}</p>
                    <button className="btn_cart" onClick={() => dispatch(incrProductAction(id))}><Svgplus/></button>
                </div>

            </div>
            <div className="container_price">
            <p className="basket_discont_price">{discont_price}$</p>
                {discont_price - price !== 0 &&
                    <>
                        <p className="basket_price">{price}$</p>
                    </>
                }
                </div>
                <button className="close-btn" onClick={() => dispatch(remProductAction(id))}>
                    <Svgcloset style={{width: '15px', height: '15px'}}/>
                </button>

        </div>
    )
}


                

export default Cartitem
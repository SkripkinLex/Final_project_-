import { useRef } from "react"
import { useDispatch } from "react-redux"
import { filterPriceProductAction, filterSalesProductAction, sortProductsAction } from "./store/productsListReducer"
import './FilterProducts.css'


function FilterProducts(){
    const dispatch = useDispatch()
    const formRef = useRef()

    function serMinMaxPrice(){
        let data = new FormData(formRef.current)
        dispatch(filterPriceProductAction(Object.fromEntries(data)))
    }

    return(
        <div className="title_select">
            <p className="title_select_price">Price</p>
            <form ref={formRef} onChange={() => serMinMaxPrice()}>
                <input className="input_min_price" type='number' name="min_price" placeholder="From"/>
                <input className="input_max_price" type='number' name="max_price" placeholder="To"/>
            </form>
            <label className="discounted_items_input">
                <p className="discounted_items">Discounted items</p>
                <input className="input_checkbox_item" onChange={(event) => {
                    dispatch(filterSalesProductAction(event.target.checked))
                    }} type={'checkbox'}/>
            </label>
            <p className="sorted">Sorted</p>
            <select className="select_value" onChange={(event) => dispatch(sortProductsAction(event.target.value))}>
                <option value={0}>by default</option>
                <option value={1}>Sort descending price</option>
                <option value={2}>Sort by price ascending</option>
            </select>
        </div>
    )
}

export default FilterProducts


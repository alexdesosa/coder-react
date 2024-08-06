import Item from "../Item/Item.jsx"

const ItemList = ({products}) => {
    return(
        <>
        <div>
            <div>
                Item List
            </div>
            {products.map((product) =>{
                return <Item key={product.id} product={product}/>
            })}            
        </div>


        </>

    )
}

export default ItemList
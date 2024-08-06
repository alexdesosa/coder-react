const Item = ({product}) => {
    return (
        <div>
             <div>{product.name}</div>
             <div>{product.price}</div>
             <div>{product.description}</div> 
             <img src={product.image} alt="" />
        </div>
    )
}

export default Item
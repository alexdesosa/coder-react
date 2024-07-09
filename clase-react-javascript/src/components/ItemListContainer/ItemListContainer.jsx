// import ItemList from '../ItemList/ItemList.jsx'
// import ItemCount from "../ItemCount/ItemCount.jsx";
import './ItemListContainer.css'
const ItemListContainer = ({title}) => {
    return(
        <>
        <div>
            <h1 id='titulo'>{title}</h1>

        </div>
        {/* <ItemList />
        <ItemCount stock={10} initial={1}/>         */}
        </>

    )
}

export default ItemListContainer;
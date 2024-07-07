
const Nabvar = ({ categories, title}) => {
    // const categories = props.categories;
    // Código JS
    return(
    <>
        <div>
            {title}
        </div>
        <div>
            <a href="#"> {categories[0]} </a> 
            <a href="#"> {categories[1]} </a> 
            <a href="#"> {categories[2]} </a> 
            <a href="#"> {categories[3]} </a> 
            <a href="#"> {categories[4]} </a> 

        </div>
    </>       
    ); 

}

export default Nabvar;
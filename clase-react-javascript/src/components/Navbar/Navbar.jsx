import CartWidget from '../../components/CartWidget/CartWidget.jsx'
import "./Navbar.css"
const Navbar = ({ categories}) => {
    // const categories = props.categories;

    // Código JS
    return(
    <>
        <div className='navbarContainer'>
            <div>
            <a href="#"><i className="fas fa-earth-americas" id='logo'></i></a>
            </div>
            <div id='navbar'>
                <a href="#" className='navbarLink'> {categories[0]} </a> 
                <a href="#" className='navbarLink'> {categories[1]} </a> 
                <a href="#" className='navbarLink'> {categories[2]} </a> 
                <a href="#" className='navbarLink'> {categories[3]} </a> 
                <a href="#" className='navbarLink'> {categories[4]} </a> 
            </div>
            <a href="#" id='cart'><CartWidget /></a>
    </div>
    </>       
    ); 

}

export default Navbar;
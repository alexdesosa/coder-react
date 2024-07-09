import './App.css'
import Nabvar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import {categories } from './mock/mockData.js'


function App() {
  const title = 'Bienvenidos a un nuevo mundo intergalactico';
  return (
    <>
      <Nabvar categories= {categories}/>
      <ItemListContainer title = {title} />


    </>
  )
}

export default App

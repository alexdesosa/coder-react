import './App.css'
import Nabvar from './components/Navbar/Navbar.jsx';
import {categories } from './mock/mockData.js'


function App() {
  const title = 'Curso de React';
  return (
    <>
    <div>
      <Nabvar categories= {categories} title = 'LOGO'/>
      <h1>Bienvenidos {title}</h1>
    </div>
    </>
  )
}

export default App

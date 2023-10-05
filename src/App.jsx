import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import links from './data/links'


const App = () => {


  return (
    <>
    <Header logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" logoAlt="Pokedex logo" links={links}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default App

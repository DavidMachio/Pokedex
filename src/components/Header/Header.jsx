import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = ({logo, logoAlt, links}) => {
  return (
    <header>
      <div className="home-icono">
      <img className="icon" src={logo} alt={logoAlt}/>
      <a className="title">Pokedex</a>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
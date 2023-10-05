import "./Header.css"

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
            <a href={link.link}>{link.name}</a>
          </li>))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
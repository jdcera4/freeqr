import style from '../styles/Nav.module.css'
export default function NavBar() {
  return (
    <div>
      <nav className={style.navBar}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">MyFreeQR</a>
          <a href="#!" className="brand-logo" id={style.menu}><i className="material-icons">menu</i></a>
          <ul className="right">
            <li><a href=""><i className="material-icons">more_horiz</i></a></li>
          </ul>
        </div>
      </nav> 
    </div>

  )
}

import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/menues'>Menues</Link>
        </li>
        <li>
            <Link href='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

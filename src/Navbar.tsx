import './Navbar.css'
import './Lines.css'
import './Glow.css'

import { GetScreenWidth } from './Helpers.tsx'

function Navbar() {
   
    const width = GetScreenWidth();

    if (width >= 768) {
        return (
            <>
                <nav className="navbar-flexbox">
                    <a>LAMBO</a>
                    <ul className="navbar-options">
                        <li><a>pricing</a></li>
                        <li><a>location</a></li>
                        <li><a>contact</a></li>
                    </ul>
                </nav>
                <div className="line" />
            </>
        )

    } else {
          return (
            <>
                <nav className="navbar-flexbox">
                    <a>LAMBO</a> <a>☰</a>
                </nav>
            </>
          )
    }
}

export default Navbar

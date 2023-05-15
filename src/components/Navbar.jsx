import {Link} from 'react-router-dom'
import homelogo from '../assets/home.png'

function Navbar () {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <div className="container">
            <Link to='/'>
                <img className='homelogo' src={homelogo} alt='HOME'/>
            </Link>
            </div>
        </nav>
        </div>
    )
}
export default Navbar;
import {Link} from 'react-router-dom';
import beerImg from '../assets/beers.png'
import randomImg from '../assets/random-beer.png'
import newImg from '../assets/new-beer.png'

function Home() {
    return (
        <div> 
            <Link to="/Beers">
                <img src={beerImg} alt="beers" />
                <div>
                    <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec luctus vulputate magna, id egestas elit vulputate nec. 
                    Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
                    Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.</p>
                    </div>
            </Link>

<Link to="/random-beer">
<img src={randomImg} alt="random-beer" />
<div>
    <h1>Random Beer</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec luctus vulputate magna, id egestas elit vulputate nec. 
    Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
    Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.</p>
    </div>
</Link>

<Link to="/new-beer">
    <img src={newImg} alt="new-beer" />
    <div>
        <h1>New Beer</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec luctus vulputate magna, id egestas elit vulputate nec. 
        Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
        Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.</p>
        </div>
</Link>
</div>
    )
}

export default Home;
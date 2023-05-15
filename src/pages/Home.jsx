import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import randomImg from "../assets/random-beer.png";
import newImg from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <div className="homebundle">
        <Link to="/Beers">
          <img className="homeimgs" src={beerImg} alt="beers" />
          <h1 className="hometext">All Beers</h1>
        </Link>

        <p className="hometext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          vulputate magna, id egestas elit vulputate nec. Vestibulum tincidunt
          vel augue eget cursus. Quisque placerat turpis ac leo consequat, non
          aliquet erat rutrum. Curabitur interdum vitae ligula blandit faucibus.
          Curabitur vel turpis at dolor eleifend tristique at eu sapien.
        </p>
      </div>

      <div className="homebundle">
        <Link to="/random-beer">
          <img className="homeimgs" src={randomImg} alt="random-beer" />
          <h1 className="hometext">Random Beer</h1>
        </Link>
        <p className="hometext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          vulputate magna, id egestas elit vulputate nec. Vestibulum tincidunt
          vel augue eget cursus. Quisque placerat turpis ac leo consequat, non
          aliquet erat rutrum. Curabitur interdum vitae ligula blandit faucibus.
          Curabitur vel turpis at dolor eleifend tristique at eu sapien.
        </p>
      </div>

      <div className="homebundle">
        <Link to="/new-beer">
          <img className="homeimgs" src={newImg} alt="new-beer" />
          <h1 className="hometext">New Beer</h1>
        </Link>
        <p className="hometext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          vulputate magna, id egestas elit vulputate nec. Vestibulum tincidunt
          vel augue eget cursus. Quisque placerat turpis ac leo consequat, non
          aliquet erat rutrum. Curabitur interdum vitae ligula blandit faucibus.
          Curabitur vel turpis at dolor eleifend tristique at eu sapien.
        </p>
      </div>
    </div>
  );
}

export default Home;

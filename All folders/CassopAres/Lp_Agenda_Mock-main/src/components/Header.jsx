import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <ul>
          <li>
            <Link to={`/Organization`}>Organização</Link>
          </li>
          <li>
            <Link to={`/`}>Taferas</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
        <div className="header">
               <ul>
                <li><Link to={`/Organization`}>Organização</Link></li>
                <li><Link to={`/`}>Taferas</Link></li>
               </ul>
        </div>
    );
};

export default Header;

import "./Nav.css";
import Buscador from "../Buscador/Buscador";

const Nav = () => {
  return (
    <> 
    
    <div className="header-netflix">
     
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
 
      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </div>
    <div className="searcher"> 
    <Buscador/>
    </div>
    </>
  );
};

export default Nav;

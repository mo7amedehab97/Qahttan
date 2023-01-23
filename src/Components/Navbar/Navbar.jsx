import "./index.css";
import Logo from "../../assets/logo-min (1).png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo_container">
        <img src={Logo} alt="Qahtan logo" width={100} height={100} />
      </div>
      <div className="nav_links">
        <Link to={"/"}>الخدمات</Link>|<Link to={"/about"}>من نحن</Link>
      </div>
      <div className="nav_btn">
        <a href="http://wa.me/+966570992826" target="_blank">
          احجز الأن
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

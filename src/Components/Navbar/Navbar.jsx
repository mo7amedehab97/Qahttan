import "./index.css";
import Logo from "../../assets/logo-min (1).jpeg";
const Navbar = () => {
  return (
    <nav>
      <div className="logo_container">
        <img src={Logo} alt="Qahtan logo" width={60} height={60} />
      </div>
      <div className="nav_links">
        <a href="#services">الخدمات</a>|<a href="#about">من نحن</a>
      </div>
      <div className="nav_btn">
        <button>احجز الأن</button>
      </div>
    </nav>
  );
};

export default Navbar;

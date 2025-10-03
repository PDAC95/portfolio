import { useContext } from "react";
import { Context } from "./Context";

const Header = () => {
  const { changeNav, nav, toggle } = useContext(Context);
  return (
    <header className="header theme-bg">
      <div className="logo">Menu</div>
      <div className="menu-toggle">
        <button
          className={`menu-button ${toggle ? "menu-button--open" : ""}`}
          onClick={() => changeNav(nav, !toggle)}
        >
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};
export default Header;

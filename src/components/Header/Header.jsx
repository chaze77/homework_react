import { Badge, Box, IconButton } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../../cartContext";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <Link to="/">
              <img
                style={{ width: 120, height: 70 }}
                src="https://nishman.ru/wp-content/uploads/2020/11/Nishman_Logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <nav className="nav">
            <Link className="nav__link" to="/">
              главная
            </Link>
            <Link className="nav__link" to="/about">
              о нас
            </Link>
            <Link className="nav__link" to="/contacts">
              контакты
            </Link>
            <Link className="nav__link" to="/cart">
              корзина
            </Link>
            <Link className="nav__link" to="/add">
              AddProduct
            </Link>
            <Link className="nav__link" to="/list">
              ProductList
            </Link>

            <IconButton
              onClick={() => navigate("/cart")}
              aria-label="add to shopping cart">
              <Badge badgeContent={count}>
                <AddShoppingCart style={{ color: "black" }} />
              </Badge>
            </IconButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

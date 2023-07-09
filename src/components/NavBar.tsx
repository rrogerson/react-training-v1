import logo from "../Images/logo.png";
import { useEffect, useState } from "react";
import navData from "../components/data/navData.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState(navData);
  const fetchItems = async () => {
    //const data = await fetch('url to web api');

    //const items = await data.json();
    const items = navData;
    console.log(items.items);
    setItems(items);
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-2">
      <a
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        href="#"
      >
        <img
          src={logo}
          alt="Rotary Club of Lutterworth"
          width="203"
          height="76"
        />
      </a>
      <ul className="nav nav-pills mt-3">
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item mx-3">
          <a href="#" className="nav-link">
            Get Involved
          </a>
        </li>
        <li className="nav-item mx-3">
          <a href="#" className="nav-link">
            Events
          </a>
        </li>
        <li className="nav-item mx-3">
          <a href="#" className="nav-link">
            News
          </a>
        </li>
        <li className="nav-item mx-3">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      {/*
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>*/}
      {/* <ul className="nav nav-pills">
        {
            items.items.map(item => (<li className="nav-item">
            <Link className="nav-link" to="{item.link}">
              {item.name}
            </Link>
          </li>))
        }
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul> */}
    </header>
  );
};

export default Navbar;

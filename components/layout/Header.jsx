import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [navbarSearch, setNavbarSearch] = useState(false);
  const handleModalShow = () => setNavbarSearch(true);
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        fixed="top"
        className="px-lg-5  mainNavbar navbar-dark"
      >
        <Container fluid className="w-max p-0">
          <Link href="/">
            <a className="text-decoration-none ps-2">
              <Logo />
            </a>
          </Link>
          <Navbar.Toggle className="me-2" aria-controls="navbarScroll" />
          <Navbar.Collapse className="bg-dark ps-2 py-4 py-lg-0">
            <Nav className="me-auto  gap-2 mx-lg-auto my-2 my-lg-0">
              <Link href="/">
                <a className="text-decoration-none text-white op-font activeColor">
                  HOME
                </a>
              </Link>
              <Link href="/menu">
                <a className="text-decoration-none text-white op-font">MENU</a>
              </Link>
              <Link href="/about">
                <a className="text-decoration-none text-white op-font">ABOUT</a>
              </Link>
              <Link href="/book">
                <a className="text-decoration-none text-white op-font">
                  BOOK TABLE
                </a>
              </Link>
            </Nav>
            <div className="d-flex align-items-center gap-4 navbarIcons ">
              <Link href="/auth/login">
                <a>
                  <i className="bi bi-person"></i>
                </a>
              </Link>
              <Link href="/cart">
                <a>
                  <span className="position-relative ">
                    <i className="bi bi-cart"></i>
                    <div
                      className="position-absolute d-flex justify-content-center align-items-center bottom-50 start-50  rounded-circle bg-warning text-white fw-bold"
                      style={{ minWidth: "25px", minHeight: "25px" }}
                    >
                      {cart.products.length === 0 ? "0" : cart.products.length}
                    </div>
                  </span>
                </a>
              </Link>
              <a onClick={() => handleModalShow(true)}>
                <i className="bi bi-search"></i>
              </a>
              <Link href="/">
                <a className="header-order-btn text-white rounded-pill bg-warning btn">
                  <span>Order Online</span>
                </a>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Search setNavbarSearch={setNavbarSearch} navbarSearch={navbarSearch} />
    </>
  );
};

export default Header;

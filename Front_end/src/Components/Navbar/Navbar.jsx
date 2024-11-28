import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav className="position-sticky top-0 z-index-1000"> {/* Added sticky and z-index */}
          <NavbarContainer>
            <NavLogo to="/">
              Event-Sphere
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/events">Schedule</NavLinks>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink to="/form">
                  <Button primary>
                    LOG IN
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
              <NavItemBtn>
                <NavBtnLink to="/singup">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

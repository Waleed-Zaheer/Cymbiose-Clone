import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import {
  Nav,
  ContainerWrapper,
  LogoImage,
  MenuButton,
  NavList,
  NavItem,
  RightMenu,
} from '../styles/S-navbar.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // map every route to its nav-item index
    const routeToIndex = {
      '/': 0,
      '/our-story': 3,
      '/legal-notes': 2,
      '/help-center': 4,
    };

    const newIndex = routeToIndex[path];
    if (newIndex !== undefined && newIndex !== activeIndex) {
      setPreviousIndex(activeIndex);
      setActiveIndex(newIndex);
    }
  }, [location.pathname, activeIndex]);

  const handleNavClick = (index) => {
    if (index === activeIndex) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <Nav>
      <div className="container-fluid h-9 px-3">
        <ContainerWrapper>
          <Link to="/">
            <LogoImage src={Logo} alt="Logo" />
          </Link>

          <MenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
          </MenuButton>

          <NavList isOpen={isOpen}>
            <NavItem
              className={activeIndex === 0 ? 'active' : ''}
              isReverse={previousIndex === 0}
              onClick={() => handleNavClick(0)}
            >
              <Link to="/">Home</Link>
            </NavItem>

            <NavItem
              className={activeIndex === 1 ? 'active' : ''}
              isReverse={previousIndex === 1}
              onClick={() => handleNavClick(1)}
            >
              {/* external link – keep <a> */}
              <a
                href="https://medium.com/@cymbiose.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </NavItem>

            <NavItem
              className={activeIndex === 2 ? 'active' : ''}
              isReverse={previousIndex === 2}
              onClick={() => handleNavClick(2)}
            >
              {/* internal route – no target="_blank" */}
              <Link to="/legal-notes">Legal Notes</Link>
            </NavItem>

            <NavItem
              className={activeIndex === 3 ? 'active' : ''}
              isReverse={previousIndex === 3}
              onClick={() => handleNavClick(3)}
            >
              <Link to="/our-story">Our Story</Link>
            </NavItem>

            <NavItem
              className={activeIndex === 4 ? 'active' : ''}
              isReverse={previousIndex === 4}
              onClick={() => handleNavClick(4)}
            >
              <Link to="/help-center">Help</Link>
            </NavItem>

            <NavItem className="hidden">
              <Link to="/login">Login</Link>
            </NavItem>
          </NavList>

          <RightMenu>
            <Link to="/login">Login</Link>
          </RightMenu>
        </ContainerWrapper>
      </div>
    </Nav>
  );
}
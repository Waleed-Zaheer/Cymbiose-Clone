import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem 0;
  height: 69px;
  position: relative;
  font-weight: 400;
  line-height: 21px;
  font-size: 14px;
  background: url('/src/assets/gradient-bg.png');
  z-index: 50;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  margin: 0 76px;

  @media (max-width: 768px) {
    padding: 0 2rem;
    margin: 0px;
  }

  @media (max-width: 475px) {
    padding: 0 1rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
    margin: 0 auto;
  }
`;

export const LogoImage = styled.img`
  height: 30px;
  width: auto;
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: 1px solid #3c3b3b3c;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
  }

  &:focus {
    outline: black;
    box-shadow: 0 0 0 2px rgba(45, 20, 65, 0.8);
  }
`;

export const NavList = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: -77px;
  padding: 0;

  @media (max-width: 992px) {
    flex-direction: column;
    background: white;
    position: absolute;
    top: 69px;
    left: 0;
    right: 0;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    gap: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export const NavItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isReverse',
})`
  margin: 0 1rem;
  position: relative;
  cursor: pointer;

  a {
    padding: 8px 0;
    text-decoration: none;
    color: var(--dark-purple-2, #2d004d);
    font-weight: 600;
    font-size: 14px;
    transition: color 0.3s ease-in-out;
    display: inline-block;
    position: relative;
  }

  &.active a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1.5px;
    background-color: black;
    width: 100%;
    animation: ${({ isReverse }) =>
    isReverse ? 'border-reverse 0.5s ease-out' : 'border-animation 0.5s ease-out'};
  }

  @keyframes border-animation {
    0% {
      width: 0;
      left: 0;
    }
    100% {
      width: 100%;
      left: 0;
    }
  }

  @keyframes border-reverse {
    0% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;

  @media (max-width: 992px) {
    display: none;
  }
`;
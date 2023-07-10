import {
  ContactListItem,
  ContactListLink,
  SocialsList,
  SocialsListItem,
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
  NavListMobileItem,
} from './MobileMenu.styled';
import instagram from 'images/sprite.svg';
import telegram from 'images/sprite.svg';
import linkedin from 'images/sprite.svg';
import close from 'images/sprite.svg';
import { FaTiktok } from 'react-icons/fa';
import { useLocation } from 'react-router';

export const MobileMenu = ({ isOpen, toggleMenu, setIsOpen }) => {
  const location = useLocation();

  if (isOpen) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'visible';
  }

  return (
    <>
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu}>
        <use href={close + '#close'}></use>
      </HeaderSvgMobile>

      {isOpen && (
        <MobileBox>
          <NavListMobile>
            <NavListMobileItem
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
              aria-label="Home"
              onClick={toggleMenu}
            >
              Home
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/about' ? 'active' : ''
              }`}
              to="/about"
              aria-label="About"
              onClick={toggleMenu}
            >
              About
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/services' ? 'active' : ''
              }`}
              to="/services"
              aria-label="Services"
              onClick={toggleMenu}
            >
              Services
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/projects' ? 'active' : ''
              }`}
              to="/projects"
              aria-label="Projects"
              onClick={toggleMenu}
            >
              Projects
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
              to="/contact"
              aria-label="Contact"
              onClick={toggleMenu}
            >
              Contact
            </NavListMobileItem>
          </NavListMobile>
          <ContactListMobile>
            <ul>
              <li>
                <ContactListLink href="tel:+38011111111">
                  +38011111111
                </ContactListLink>
              </li>

              <ContactListItem>
                <ContactListLink href="mailto:contact@brandmaze.com">
                  contact@brandmaze.com
                </ContactListLink>
              </ContactListItem>
            </ul>

            <SocialsList>
              <SocialsListItem>
                <a href="https://www.instagram.com/invites/contact/?i=1wcw0x66x4cku&utm_content=rwvytfj" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20">
                    <use href={instagram + '#instagram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a href="https://t.me/brandmaze" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22">
                    <use href={telegram + '#telegram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <FaTiktok />
              </SocialsListItem>
              <SocialsListItem>
                <svg width="20" height="20">
                  <use href={linkedin + '#linkedin'}></use>
                </svg>
              </SocialsListItem>
            </SocialsList>
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};

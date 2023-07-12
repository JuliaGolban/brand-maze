import { useLocation } from 'react-router-dom';
import {
  ContactList,
  ContactListItem,
  ContactListLink,
  NavList,
  NavListLink,
  SidebarBox,
  SocialsList,
  SocialsListItem,
  SidebarContainer,
  TikTok,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <SidebarContainer>
      <SidebarBox>
        <NavList>
          <NavListLink
            className={`link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
            aria-label="Home"
          >
            {t('Home')}
          </NavListLink>
          <NavListLink
            className={`link ${location.pathname === '/about' ? 'active' : ''}`}
            to="/about"
            aria-label="About"
          >
            {t('About')}
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/services' ? 'active' : ''
            }`}
            to="/services"
            aria-label="Services"
          >
            {t('Services')}
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/projects' ? 'active' : ''
            }`}
            to="/projects"
            aria-label="Projects"
          >
            {t('Projects')}
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/contact' ? 'active' : ''
            }`}
            to="/contact"
            aria-label="Contact"
          >
            {t('Contact')}
          </NavListLink>
        </NavList>
        <ContactList>
          <ul>
            <li>
              <ContactListLink href="tel:+380959309876">
                +38 095 930 98 76
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
              <a
                href="https://instagram.com/brand.maze?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#instagram'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://t.me/brandmaze"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#telegram'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTok />
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://www.linkedin.com/in/brand-maze-935584283"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </a>
            </SocialsListItem>
          </SocialsList>
        </ContactList>
      </SidebarBox>
    </SidebarContainer>
  );
};

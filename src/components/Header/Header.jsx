import {
  ContainerHeader,
  Logo,
  LogoFirstWord,
  LogoSecondWord,
  Navigation,
  NavList,
  NavListItem,
  NavListItemLink,
} from "./Header.styled";

const Header = () => {
  return (
    <ContainerHeader>
      <Navigation>
        <Logo href="/">
          <LogoFirstWord>Travel</LogoFirstWord>
          <LogoSecondWord>Trucks</LogoSecondWord>
        </Logo>
        <NavList>
          <NavListItem>
            <NavListItemLink to="/">Home</NavListItemLink>
          </NavListItem>
          <NavListItem>
            <NavListItemLink to="/catalog">Catalog</NavListItemLink>
          </NavListItem>
        </NavList>
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;

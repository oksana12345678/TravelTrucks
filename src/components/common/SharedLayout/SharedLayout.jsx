import { useLocation } from "react-router";
import Header from "../../Header/Header";
import { HeaderStyle } from "./SharedLayout.styled";

const SharedLayout = ({ children }) => {
  const location = useLocation();
  const isCatalog = location.pathname === "/catalog";
  return (
    <>
      <HeaderStyle $isCatalog={isCatalog}>
        <Header />
      </HeaderStyle>
      <main>{children}</main>
    </>
  );
};

export default SharedLayout;

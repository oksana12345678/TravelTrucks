import { useLocation } from "react-router";
import Header from "../../Header/Header";
import { HeaderStyle } from "./SharedLayout.styled";

const SharedLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <HeaderStyle $isHome={isHome}>
        <Header />
      </HeaderStyle>
      <main>{children}</main>
    </>
  );
};

export default SharedLayout;

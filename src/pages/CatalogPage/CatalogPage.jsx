import { useDispatch } from "react-redux";
import CamperList from "../../components/CatalogComponents/CamperList /CamperList";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar";
import { MainContainer, SectionStyle } from "./CatalogPage.styled";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/camper/operation";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <SectionStyle>
      <MainContainer>
        <SideBar />
        <CamperList />
      </MainContainer>
    </SectionStyle>
  );
};

export default CatalogPage;

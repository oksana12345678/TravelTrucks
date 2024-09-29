import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar";
import { MainContainer, SectionStyle } from "./CatalogPage.styled";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/camper/operation";
import { selectStatusFilter } from "../../redux/filter/selectors.js";
import { setStatusFilter } from "../../redux/filter/slice.js";
import CamperList from "../../components/CatalogComponents/CamperList /CamperList.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const backendFilters = useSelector(selectStatusFilter);
  const setBackendFilters = (filters) => dispatch(setStatusFilter(filters));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAllCampers(backendFilters));
  };

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <SectionStyle>
      <MainContainer>
        <SideBar
          backendFilters={backendFilters}
          setBackendFilters={setBackendFilters}
          handleSubmit={handleSubmit}
        />
        <CamperList />
      </MainContainer>
    </SectionStyle>
  );
};

export default CatalogPage;

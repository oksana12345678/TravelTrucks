import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar";
import {
  MainContainer,
  SectionStyle,
  ShowFilterButton,
  SidebarContainer,
} from "./CatalogPage.styled";
import { useEffect, useState } from "react";
import { fetchAllCampers } from "../../redux/camper/operation";
import { selectStatusFilter } from "../../redux/filter/selectors.js";
import { setStatusFilter } from "../../redux/filter/slice.js";
import CamperList from "../../components/CatalogComponents/CamperList /CamperList.jsx";
import Button from "../../components/common/Button/Button.jsx";
import { useMediaQuery } from "react-responsive";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const backendFilters = useSelector(selectStatusFilter);
  const [page, setPage] = useState(1);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  const setBackendFilters = (filters) => dispatch(setStatusFilter(filters));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAllCampers({ appliedFilters: backendFilters, page }));
    setAreFiltersVisible(false);
  };

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  const toggleFiltersVisibility = () => {
    setAreFiltersVisible((prev) => !prev);
  };

  return (
    <SectionStyle>
      <MainContainer>
        {!isLargeScreen && (
          <ShowFilterButton>
            <Button type="button" handler={toggleFiltersVisibility}>
              {areFiltersVisible ? "Hide Filters" : "Show Filters"}
            </Button>
          </ShowFilterButton>
        )}
        <SidebarContainer isVisible={isLargeScreen || areFiltersVisible}>
          <SideBar
            backendFilters={backendFilters}
            setBackendFilters={setBackendFilters}
            handleSubmit={handleSubmit}
            areFiltersVisible={areFiltersVisible}
            setAreFiltersVisible={setAreFiltersVisible}
          />
        </SidebarContainer>
        <CamperList />
      </MainContainer>
    </SectionStyle>
  );
};

export default CatalogPage;

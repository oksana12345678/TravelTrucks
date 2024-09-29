import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar";
import { MainContainer, SectionStyle } from "./CatalogPage.styled";
import { useEffect, useState } from "react";
import {
  fetchAllCampers,
  fetchAutomaticCampers,
} from "../../redux/camper/operation";
import {
  selectFilter,
  selectQuery,
  selectTemporaryStorage,
} from "../../redux/filter/selectors.js";
import {
  setFilterQuery,
  setStatusFilter,
  setTemporaryStorage,
} from "../../redux/filter/slice.js";
import CamperList from "../../components/CatalogComponents/CamperList /CamperList.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const frontendFilters = useSelector(selectFilter);
  const backendFilters = useSelector(selectQuery);
  const temporaryStorage = useSelector(selectTemporaryStorage);

  const [tempFrontendFilters, setTempFrontendFilters] =
    useState(frontendFilters);
  const [tempBackendFilters, setTempBackendFilters] = useState(backendFilters);
  const [tempAutomaticFilters, setTempAutomaticFilters] =
    useState(temporaryStorage);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  useEffect(() => {
    if (tempAutomaticFilters.length > 0) {
      dispatch(setTemporaryStorage(tempAutomaticFilters));
    }
    if (tempBackendFilters.length > 0) {
      dispatch(setFilterQuery(tempBackendFilters));
    }
  }, [tempBackendFilters, tempAutomaticFilters, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Promise.all([
        dispatch(fetchAutomaticCampers(temporaryStorage)),
        dispatch(fetchAllCampers(backendFilters)),
      ]);

      dispatch(setStatusFilter(tempFrontendFilters));
    } catch (error) {
      console.error("Error fetching campers:", error);
    }
  };

  return (
    <SectionStyle>
      <MainContainer>
        <SideBar
          selectedFilters={tempFrontendFilters}
          selectedBackendFilters={tempBackendFilters}
          selectedAutomaticFilters={tempAutomaticFilters}
          handleFilter={setTempFrontendFilters}
          handleAutomaticFilter={setTempAutomaticFilters}
          handleBackendFilter={setTempBackendFilters}
          handleSubmit={handleSubmit}
        />
        <CamperList />
      </MainContainer>
    </SectionStyle>
  );
};

export default CatalogPage;

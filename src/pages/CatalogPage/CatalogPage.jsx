import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar";
import { MainContainer, SectionStyle } from "./CatalogPage.styled";
import { useEffect, useState } from "react";
import { fetchAllCampers } from "../../redux/camper/operation";
import { selectFilter, selectQuery } from "../../redux/filter/selectors.js";
import { selectFilteredContacts } from "../../redux/camper/selectors";
import { setFilterQuery, setStatusFilter } from "../../redux/filter/slice.js";
import CamperList from "../../components/CatalogComponents/CamperList /CamperList.jsx";

const CatalogPage = () => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const selectedQuery = useSelector(selectQuery);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  console.log(appliedFilters);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setStatusFilter(appliedFilters));

    dispatch(selectFilteredContacts(filters));

    setAppliedFilters([]);
  };

  console.log(appliedFilters);

  return (
    <SectionStyle>
      <MainContainer>
        <SideBar
          selectedFilters={appliedFilters} // Передаємо актуальні фільтри
          handleFilter={setAppliedFilters} // Оновлення фільтрів
          handleSubmit={handleSubmit} // Сабміт фільтрів
        />

        <CamperList />
        {/* CamperList отримує відфільтровані дані через Redux */}
      </MainContainer>
    </SectionStyle>
  );
};

export default CatalogPage;

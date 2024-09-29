import { useSelector } from "react-redux";
import CamperListItem from "../CamperListItem/CamperListItem";
import {
  ButtonCamperList,
  CamperListItemStyle,
  CamperListStyled,
  ContainerCamperList,
} from "./CamperList.styled";
import { selectFilteredLocation } from "../../../redux/filter/selectors";
import { useState, useEffect } from "react";
import { selectTotal } from "../../../redux/camper/selectors";

const CamperList = () => {
  const location = useSelector(selectFilteredLocation);
  const totalItems = useSelector(selectTotal);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  const indexOfLastCamper = currentPage * itemsPerPage;
  const indexOfFirstCamper = indexOfLastCamper - itemsPerPage;
  const currentCampers = location.slice(indexOfFirstCamper, indexOfLastCamper);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <ContainerCamperList>
      <CamperListStyled>
        {currentCampers.map((camper) => (
          <CamperListItemStyle key={camper.id}>
            <CamperListItem camper={camper} />
          </CamperListItemStyle>
        ))}
      </CamperListStyled>
      <div>
        <ButtonCamperList
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Load more
        </ButtonCamperList>
      </div>
    </ContainerCamperList>
  );
};

export default CamperList;

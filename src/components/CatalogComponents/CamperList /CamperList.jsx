import { useSelector } from "react-redux";
import CamperListItem from "../CamperListItem/CamperListItem";
import {
  ButtonCamperList,
  CamperListItemStyle,
  CamperListStyled,
  ContainerCamperList,
  Loader,
} from "./CamperList.styled";
import { useState, useEffect } from "react";
import {
  selectCamperList,
  selectIsLoading,
  selectTotal,
} from "../../../redux/camper/selectors";

const CamperList = () => {
  const camperList = useSelector(selectCamperList);
  const totalItems = useSelector(selectTotal);
  const loading = useSelector(selectIsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const indexOfLastCamper = currentPage * itemsPerPage;
  const indexOfFirstCamper = indexOfLastCamper - itemsPerPage;
  const currentCampers = camperList.slice(
    indexOfFirstCamper,
    indexOfLastCamper
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      {loading ? (
        <Loader color="var( --primary-text-color)" />
      ) : (
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
      )}
    </>
  );
};

export default CamperList;

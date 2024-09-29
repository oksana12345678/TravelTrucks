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
import { DotLoader } from "react-spinners";

const CamperList = () => {
  const camperList = useSelector(selectCamperList);
  const totalItems = useSelector(selectTotal);
  const loading = useSelector(selectIsLoading);

  const [displayedCampers, setDisplayedCampers] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false); // State for loading more campers
  const itemsPerPage = 4;

  useEffect(() => {
    setDisplayedCampers(camperList.slice(0, itemsPerPage));
  }, [camperList]);

  const goToNextPage = () => {
    setLoadingMore(true); // Set loading to true when starting to load more campers
    const nextCampers = camperList.slice(
      displayedCampers.length,
      displayedCampers.length + itemsPerPage
    );

    setTimeout(() => {
      // Simulating network delay (you can remove this in production)
      setDisplayedCampers((prevCampers) => [...prevCampers, ...nextCampers]);
      setLoadingMore(false); // Reset loading state after loading campers
    }, 1000); // Adjust the time as necessary
  };

  return (
    <>
      {loading ? (
        <Loader color="var(--primary-text-color)" />
      ) : (
        <ContainerCamperList>
          <CamperListStyled>
            {displayedCampers.map((camper) => (
              <CamperListItemStyle key={camper.id}>
                <CamperListItem camper={camper} />
              </CamperListItemStyle>
            ))}
          </CamperListStyled>
          {displayedCampers.length < totalItems && ( // Show button only if there are more campers to load
            <div>
              <ButtonCamperList onClick={goToNextPage} disabled={loadingMore}>
                {loadingMore ? (
                  <DotLoader color="var(--primary-text-color)" size="20" /> // You can customize the color
                ) : (
                  "Load more"
                )}
              </ButtonCamperList>
            </div>
          )}
        </ContainerCamperList>
      )}
    </>
  );
};

export default CamperList;

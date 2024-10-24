import { useSelector, useDispatch } from "react-redux";
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
import { fetchAllCampers } from "../../../redux/camper/operation";

const CamperList = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectCamperList);
  const totalItems = useSelector(selectTotal);
  const loading = useSelector(selectIsLoading);

  const [displayedCampers, setDisplayedCampers] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(
      fetchAllCampers({
        appliedFilters: [],
        page: currentPage,
        limit: itemsPerPage,
      })
    );
  }, [dispatch, currentPage]);

  useEffect(() => {
    setDisplayedCampers(camperList.slice(0, currentPage * itemsPerPage));
  }, [camperList, currentPage]);

  const goToNextPage = () => {
    if (displayedCampers.length < totalItems) {
      setLoadingMore(true);

      const nextPage = currentPage + 1;

      dispatch(
        fetchAllCampers({
          appliedFilters: [],
          page: nextPage,
          limit: itemsPerPage,
        })
      )
        .then(() => {
          setCurrentPage(nextPage);
          setLoadingMore(false);
        })
        .catch(() => {
          setLoadingMore(false);
        });
    }
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
          {displayedCampers.length < totalItems && (
            <div>
              <ButtonCamperList onClick={goToNextPage} disabled={loadingMore}>
                {loadingMore ? (
                  <DotLoader color="var(--primary-text-color)" size="20" />
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

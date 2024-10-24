import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { fetchOneCamper } from "../../redux/camper/operation";
import {
  ActiveLinkStyled,
  CamperPageSectionStyled,
  LoaderCamper,
  MiniMenuBarContainer,
  MiniMenuBarList,
} from "./CamperPage.styled";
import { DotLoader } from "react-spinners";
import Camper from "../../components/CamperComponents/Camper/Camper";
import { selectIsLoading, selectOneCamper } from "../../redux/camper/selectors";

const CamperPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();
  const oneCamper = useSelector(selectOneCamper);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchOneCamper(camperId));
  }, [dispatch, camperId]);

  return (
    <>
      {loading ? (
        <LoaderCamper>
          <DotLoader color="var(--primary-text-color)" />
        </LoaderCamper>
      ) : (
        <CamperPageSectionStyled>
          <Camper oneCamper={oneCamper} />
          <MiniMenuBarContainer>
            <MiniMenuBarList>
              <li>
                <ActiveLinkStyled to="features">Features</ActiveLinkStyled>
              </li>
              <li>
                <ActiveLinkStyled to="reviews">Reviews</ActiveLinkStyled>
              </li>
            </MiniMenuBarList>
          </MiniMenuBarContainer>
          <Outlet />
        </CamperPageSectionStyled>
      )}
    </>
  );
};

export default CamperPage;

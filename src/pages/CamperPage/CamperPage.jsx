import { useEffect } from "react";
import Camper from "../../components/CamperComponents/Camper/Camper";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCamper } from "../../redux/camper/operation";
import { Outlet, useParams } from "react-router";
import { selectIsLoading, selectOneCamper } from "../../redux/camper/selectors";
import {
  CamperPageSectionStyled,
  LinkStyled,
  LoaderCamper,
  MiniMenuBarContainer,
  MiniMenuBarList,
} from "./CamperPage.styled";
import { DotLoader } from "react-spinners";

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
          <DotLoader color="var( --primary-text-color)" />
        </LoaderCamper>
      ) : (
        <CamperPageSectionStyled>
          <Camper oneCamper={oneCamper} />
          <MiniMenuBarContainer>
            <MiniMenuBarList>
              <li>
                <LinkStyled to="features">Features</LinkStyled>
              </li>
              <li>
                <LinkStyled to="reviews">Reviews</LinkStyled>
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

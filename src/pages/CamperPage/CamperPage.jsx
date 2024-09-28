import { useEffect } from "react";
import Camper from "../../components/CamperComponents/Camper/Camper";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCamper } from "../../redux/camper/operation";
import { Outlet, useLocation, useParams } from "react-router";
import { selectOneCamper } from "../../redux/camper/selectors";
import {
  CamperPageSectionStyled,
  LinkStyled,
  MiniMenuBarContainer,
  MiniMenuBarList,
} from "./CamperPage.styled";

const CamperPage = () => {
  const dispatch = useDispatch();
  const locations = useLocation();
  const { camperId } = useParams();
  const oneCamper = useSelector(selectOneCamper);
  console.log(oneCamper);

  const backLink = locations.state ?? "/";

  console.log(backLink);

  console.log(camperId);

  useEffect(() => {
    dispatch(fetchOneCamper(camperId));
  }, [dispatch, camperId]);

  return (
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
  );
};

export default CamperPage;

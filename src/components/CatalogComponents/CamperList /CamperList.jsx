import { useSelector } from "react-redux";
import CamperListItem from "../CamperListItem/CamperListItem";
import { selectCamperList } from "../../../redux/camper/selectors";
import { CamperListItemStyle, CamperListStyled } from "./CamperList.styled";

const CamperList = () => {
  const campers = useSelector(selectCamperList);

  return (
    <>
      <CamperListStyled>
        {campers.map((camper) => {
          return (
            <CamperListItemStyle key={camper.id}>
              <CamperListItem camper={camper} />
            </CamperListItemStyle>
          );
        })}
      </CamperListStyled>
    </>
  );
};

export default CamperList;

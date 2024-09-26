// import { BsWind } from "react-icons/bs";
// import { BsCupHot } from "react-icons/bs";
// import { BsDroplet } from "react-icons/bs";
// import { FaDisplay } from "react-icons/fa6";
// import { BsFuelPumpDiesel } from "react-icons/bs";
// import { TbMicrowave } from "react-icons/tb";
// import { MdOutlineGasMeter } from "react-icons/md";
import Icon from "../../common/IconComponent/IconComponent";
import { DescListItem, OptionListContainer } from "./DescList.styled";

const DescList = ({ camper }) => {
  const { radio, AC, TV, bathroom, engine, kitchen, transmission } = camper;

  return (
    <ul>
      <OptionListContainer>
        {AC && (
          <DescListItem>
            <Icon id="icon-wind" width={20} height={20} />
            AC
          </DescListItem>
        )}
        {TV && (
          <DescListItem>
            <Icon id="icon-tv" width={20} height={20} />
            TV
          </DescListItem>
        )}
        {bathroom && (
          <DescListItem>
            <Icon id="icon-bi_droplet" width={20} height={20} />
            Bathroom
          </DescListItem>
        )}
        {kitchen && (
          <DescListItem>
            <Icon id="icon-cup-hot" width={20} height={20} />
            Kitchen
          </DescListItem>
        )}
        {engine && (
          <DescListItem>
            <Icon id="icon-fuel-pump" width={20} height={20} />
            {engine}
          </DescListItem>
        )}

        {radio && (
          <DescListItem>
            <Icon id="icon-radio" width={20} height={20} />
            radio
          </DescListItem>
        )}

        {transmission && (
          <DescListItem>
            <Icon id="icon-diagram" width={20} height={20} />
            {transmission}
          </DescListItem>
        )}
      </OptionListContainer>
    </ul>
  );
};
export default DescList;

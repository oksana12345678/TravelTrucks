import Icon from "../../common/IconComponent/IconComponent";
import { DescListItem, OptionListContainer } from "./DescList.styled";

const DescList = ({ camper }) => {
  const equipmentOptions = [
    { key: "AC", icon: "icon-ac" },
    { key: "TV", icon: "icon-tv" },
    { key: "Bathroom", icon: "icon-bathroom" },
    { key: "Kitchen", icon: "icon-kitchen" },
    { key: "engine", icon: "icon-fuel-pump", label: camper.engine },
    { key: "radio", icon: "icon-radio" },
    { key: "transmission", icon: "icon-automatic", label: camper.transmission },
  ];

  return (
    <ul>
      <OptionListContainer>
        {equipmentOptions.map(({ key, icon, label }) => {
          const showItem = key === "engine" ? label : camper[key];

          return (
            showItem && (
              <DescListItem key={key}>
                <Icon id={icon} width={20} height={20} />
                {label || key}
              </DescListItem>
            )
          );
        })}
      </OptionListContainer>
    </ul>
  );
};

export default DescList;

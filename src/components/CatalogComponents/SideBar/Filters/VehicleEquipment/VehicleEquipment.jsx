import { DescListItem, OptionListContainer } from "./VehicleEquipment.styled";
import Icon from "../../../../common/IconComponent/IconComponent";

const VehicleEquipment = () => {
  return (
    <div>
      <h4>Vehicle equipment</h4>
      <ul>
        <OptionListContainer>
          <DescListItem>
            <Icon id="icon-wind" width={32} height={32} />
            AC
          </DescListItem>

          <DescListItem>
            <Icon id="icon-tv" width={32} height={32} />
            TV
          </DescListItem>

          <DescListItem>
            <Icon id="icon-bi_droplet" width={32} height={32} />
            Bathroom
          </DescListItem>

          <DescListItem>
            <Icon id="icon-cup-hot" width={32} height={32} />
            Kitchen
          </DescListItem>

          <DescListItem>
            <Icon id="icon-radio" width={32} height={32} />
            radio
          </DescListItem>

          <DescListItem>
            <Icon id="icon-diagram" width={32} height={32} />
            Automatic
          </DescListItem>
        </OptionListContainer>
      </ul>
    </div>
  );
};

export default VehicleEquipment;

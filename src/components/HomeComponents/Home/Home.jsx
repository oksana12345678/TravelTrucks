import { useNavigate } from "react-router";
import {
  ContainerFoText,
  Description,
  HomeBackground,
  MainTitle,
} from "./Home.styled";
import Button from "../../common/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClickViewNow = () => {
    navigate("/catalog");
  };
  
  return (
    <HomeBackground>
      <ContainerFoText>
        <MainTitle>Campers of your dreams</MainTitle>
        <Description>
          You can find everything you want in our catalog
        </Description>
      </ContainerFoText>
      <Button handler={handleClickViewNow}>View Now</Button>
    </HomeBackground>
  );
};

export default Home;

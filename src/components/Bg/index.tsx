import {StylesContainer} from "./Bg"
import background from "../../assets/bg.jpg"

const Bg = () => {
  return (
    <StylesContainer className="hidden relative" >
        <img src={background} alt="" />
        <div/>
    </StylesContainer>
  );
};

export default Bg;



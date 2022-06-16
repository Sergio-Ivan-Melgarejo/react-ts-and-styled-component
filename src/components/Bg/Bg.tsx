import {BgStyle} from "./BgStyle"
import img from "../../assets/bg.jpg"

const Bg = () => {
  return (
    <BgStyle className="hidden relative" >
        <img src={img} alt="" />
        <div/>
    </BgStyle>
  );
};

export default Bg;



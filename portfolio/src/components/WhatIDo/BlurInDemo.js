import BlurIn from "./BlurIn.tsx";
import "../../output.css";
import "./Content.css"

const BlurInDemo = ({text}) => {
  return (
    <BlurIn
      word={text}
      className="text-5xl font-bold text-white BlurInDemo under-animation"
    />
  );
};
export default BlurInDemo;

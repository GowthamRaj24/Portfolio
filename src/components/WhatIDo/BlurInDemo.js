import BlurIn from "./BlurIn.tsx";
import "../../output.css";
import "./Content.css"

const BlurInDemo = ({text}) => {
  return (
    <BlurIn
      word={text}
      className="text-4xl font-bold text-black dark:text-white BlurInDemo"
    />
  );
};
export default BlurInDemo;

import './App.css';
import First from '../src/sections/First';
import Second from "../src/sections/Second";
import FollowBall from "../src/components/FollowBall/FollowBall";

function App() {
  return (
    <div className="App">
      {/* <FollowBall/> */}
      <div className="first_section">
        <First />
      </div>
      <div className='second_section'>
        <Second />
      </div>
    </div>
  );
}

export default App;

import ConvexGeometryExample from '../Threejs/Threejs';
import './ThreeComponent.css';
const ThreeComponent = () => {
    return (
        <div className="three_outer">
            <ul className='three_items'>
                <li className='three_item'><ConvexGeometryExample texture=""/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
            </ul>
        </div>
    );
}
export default ThreeComponent;
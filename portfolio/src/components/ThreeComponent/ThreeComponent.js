import ConvexGeometryExample from '../Threejs/Threejs';
import "animate.css";
import './ThreeComponent.css';
import React, { useEffect, useState } from 'react';

const ThreeComponent = () => {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {

        setScrollY(window.scrollY);
        if (window.scrollY > 150) {
            setScrollY(150);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="three_outer" >
            <ul className='three_items' style={{ transform: `scale(${0.8 + scrollY * 0.001})` }}>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
                <li className='three_item'><ConvexGeometryExample/></li>
            </ul>
        </div>
    );
}
export default ThreeComponent;
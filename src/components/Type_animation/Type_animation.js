import { TypeAnimation } from 'react-type-animation';

const TyperAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                "Full Stack Developer",
                1000,
                "AI & ML Engineer",
                1000,
                "ML & Automation Intern",
                1000,
                "Intern at Murti Labs",
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ 
                fontSize: '35px',
                fontFamily: 'Inter, sans-serif',
                color: '#fff',
                fontWeight: 'normal',
                opacity: 1,
                marginTop: '30px'
            }}
            repeat={Infinity}
        />
    );
};


export default TyperAnimation;
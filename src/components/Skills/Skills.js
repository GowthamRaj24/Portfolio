import {IconCloudDemo} from '../Cloud/Cloud';
import './Skills.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { background } from '@chakra-ui/react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Skills = () => {
    const programming_lang = ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'];
    const frameworks = ['React', 'Express', 'Node.js', 'Bootstrap', 'Tailwind-CSS']
    const technical_skills = ['Deep Learning', 'MERN Stack', 'Computer Vision', 'Model Evaluation', 'Machine Learning']
    const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter']

    return (
        <>
            <div className="skills">
                <div className='skill_right'>
                    <div className='skill_outer'>
                        
                    </div>
                </div>
                

                <div className="skill_left">
                    <IconCloudDemo />
                </div>
            </div>
            
        </>
)};

export default Skills;
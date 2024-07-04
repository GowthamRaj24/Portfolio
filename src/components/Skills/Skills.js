import {IconCloudDemo} from '../Cloud/Cloud';
import './Skills.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Skills = () => {
    return (
        <>
            <div className="skills">
                <div className="skill_left">
                    <IconCloudDemo />
                </div>
                <div className="skill_right">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <Item>
                            <div className='languages'>
                                <h1>Programming Languages</h1>
                                <ul>
                                    <li>Python</li>
                                    <li>C++ </li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>
                            <div className='frameworks'>
                                <h1>Frameworks</h1>
                                <ul>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>Node.js</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind-CSS</li>
                                    <li>Material-UI</li>
                                </ul>
                            </div>
                        </Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>
                            <div className='databases'>
                                <h1>Technical Skills</h1>
                                <ul>
                                    <li>Deep Learning</li>
                                    <li>MERN Stack</li>
                                    <li>Computer Vision</li>
                                    <li>Model Evaluation</li>
                                    <li>Machine Learning</li>
                                </ul>
                            </div>
                        </Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>
                            <div className='tools'>
                                <h1>Tools</h1>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>VS Code</li>
                                    <li>Postman</li>
                                    <li>Jupyter</li>
                                </ul>
                            </div>
                        </Item>
                        </Grid>
                    </Grid>
                </Box>
                </div>
                
            </div>
        </>
)};

export default Skills;
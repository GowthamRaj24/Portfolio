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
                
                
                <div className="skill_right">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 5, md: 5 }} sx={{backgroundColor:"#fff"}}>
                        <Grid item xs={7} >
                        <Paper elevation={4} >
                        <Item  >
                            <div className='languages paper' style={{background:"linear-gradient(to top left, #3a1f7599 0%, rgba(23, 12, 48, 0.6) 85%, rgba(14, 7, 28, 0.278) 100%)" , borderRadius:"10px" }}>
                                <h1>Programming Languages</h1>
                                <ul>
                                    {programming_lang.map((lang) => (
                                        <li>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </Item>
                        </Paper>
                        </Grid>

                        <Grid item sx={{background:"#fff"}} xs={5}>
                        <Paper elevation={4}>
                        <Item>
                            <div className='languages' style={{background:"linear-gradient(to top left, #3a1f7599 0%, rgba(23, 12, 48, 0.6) 85%, rgba(14, 7, 28, 0.278) 100%)" , borderRadius:"10px" }}>
                                <h1>Coding</h1>
                                <ul>
                                {programming_lang.map((lang) => (
                                        <li>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </Item>
                        </Paper>
                        </Grid>

                        <Grid item  sx={{backgroundColor:"#00CED1"}} xs={5}>
                        <Paper elevation={4}>
                        <Item>
                            <div className='frameworks' style={{background:"linear-gradient(to top left, #3a1f7599 0%, rgba(23, 12, 48, 0.6) 85%, rgba(14, 7, 28, 0.278) 100%)" , borderRadius:"10px" }}>
                                <h1>Frameworks</h1>
                                <ul>
                                {frameworks.map((frame) => (
                                        <li>{frame}</li>
                                    ))}
                                </ul>
                            </div>
                        </Item>
                        </Paper>
                        </Grid>

                        <Grid item  sx={{backgroundColor:"#00CED1"}} xs={7}>
                        <Paper elevation={4}>
                        <Item>
                            <div className='databases' style={{background:"linear-gradient(to top left, #3a1f7599 0%, rgba(23, 12, 48, 0.6) 85%, rgba(14, 7, 28, 0.278) 100%)" , borderRadius:"10px" }}>
                                <h1>Technical Skills</h1>
                                <ul>
                                {technical_skills.map((skill) => (
                                        <li>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </Item>
                        </Paper>
                        </Grid>

                        <Grid item  xs={12}>
                        <Paper elevation={4}>
                        <Item>
                            <div className='tools' style={{background:"linear-gradient(to top left, #3a1f7599 0%, rgba(23, 12, 48, 0.6) 85%, rgba(14, 7, 28, 0.278) 100%)" , borderRadius:"10px" }}>
                                <h1>Tools</h1>
                                <ul>
                                {tools.map((tool) => (
                                        <li>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </Item>
                        </Paper>
                        </Grid>

                    </Grid>
                </Box>
                </div>
                <div className="skill_left">
                    <IconCloudDemo />
                </div>
            </div>
            
        </>
)};

export default Skills;
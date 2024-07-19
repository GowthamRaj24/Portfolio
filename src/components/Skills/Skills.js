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
    const frameworks = ['React', 'Express', 'Node.js', 'Bootstrap', 'Tailwind-CSS','Bootstrap'];
    const technical_skills = ['Deep Learning', 'MERN Stack', 'Computer Vision', 'Model Evaluation', 'Machine Learning']
    const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter']

    return (
        <>
            <div className="skills">
                <div className='skill_right'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={7} >
                            <h1>Programming Languages</h1>
                            <Item  sx={{backgroundColor:"#2b1756" , color:"#9c9a9a" , fontSize:"20px", borderRadius:"10px"}}>
                                <div className='items'>
                                <ul style={{listStyle:"inherit"}}>
                                    {programming_lang.map((lang) => <li>{lang}</li>)}
                                </ul>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={5}>
                            <h1>Frameworks</h1>
                            <Item sx={{backgroundColor:"#2b1756" , color:"#9c9a9a" , fontSize:"20px" , borderRadius:"10px"}}>
                            <div className='items'>
                                <ul style={{listStyle:"inherit"}}>
                                    {frameworks.map((framework) => <li>{framework}</li>)}
                                </ul>
                            </div>
                            </Item>
                        </Grid>
                        
                        <Grid item xs={5}>
                        <h1>Tools</h1>
                            <Item sx={{backgroundColor:"#2b1756" , color:"#9c9a9a" , borderRadius:"10px" ,  fontSize:"20px" }}>
                            <div className='items'>
                                <ul style={{listStyle:"inherit"}}>
                                    {tools.map((tool) => <li>{tool}</li>)}
                                </ul>
                            </div>
                            </Item>
                        </Grid>

                        <Grid item xs={7} >
                            <h1>Technical Skills</h1>
                            <div className='item'>
                            <Item sx={{backgroundColor:"#2b1756" , color:"#9c9a9a" , fontSize:"20px" , borderRadius:"10px"}}>
                            <div className='items'>
                                <ul style={{listStyle:"inherit"}}>
                                    {technical_skills.map((skill) => <li>{skill}</li>)}
                                </ul>
                            </div>
                            </Item>
                            </div>
                        </Grid>
                     
                        <Grid item xs={12}>
                            <h1 >Tools</h1>
                            <Item sx={{padding:"20px 10px", backgroundColor:"#2b1756" , color:"#9c9a9a" , fontSize:"20px", borderRadius:"10px" }}>
                           <div className='item_last'>
                                <ul style={{display:"flex" , flexDirection : "row" , justifyContent:"space-around" , listStyle:"inherit"}}>
                                    {tools.map((tool) => <li>{tool}</li>)}
                                </ul>
                                
                                </div>
                            </Item>
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
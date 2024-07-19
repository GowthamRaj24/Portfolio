import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import { DockDemo } from '../ContactsDock/DemoDock';
import { ProjectDock } from '../ProjectDock/ProjectDock';



const Timeline = () => {
return (
    <VerticalTimeline>
    

    <VerticalTimelineElement
        className="vertical-timeline-element--work element "
        contentStyle={{ background: '#3a1f7599', color: '#fff' , width:"600px" , marginLeft:"-100px" }}
        contentArrowStyle={{ borderRight: '7px solid  #3a1f7599' }}
        date="2024 - present , Bengalore , India"   
        iconClassName = "vertical-timeline-element-icon"
        iconStyle={{ background:"#3a1f7599", color: '#fff' , fontSize: '20px'}}
        icon={<WorkIcon />}
    >
        <div className='timeline-titles'>
        <h3 className="vertical-timeline-element-title">Summer Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">MURTI Labs - GITAM University</h4>
        </div>
        <p className="">
        • Part of developing a simulation tool of a coconut farm environment using AR/VR Tool, Designing arm for coconut harvesting.<br/>
        • Coconut Farm Modelling using Computer Vision, AI and ML  and a few problems on city planning.<br/>
        • We are in the process of organizing a training session on Drone piloting by Clear Water Dynamics for the GITAM family and you will be part of it. 
        </p>
        <ProjectDock />
    </VerticalTimelineElement>


    <VerticalTimelineElement
        className="vertical-timeline-element--work element"
        contentStyle={{ background: '#3a1f7599', color: '#fff', width:"600px" , marginRight:"-100px" }}
        contentArrowStyle={{ borderRight: '7px solid  #3a1f7599' }}
        date="2024 - present , Bengalore , India"   
        iconClassName='vertical-timeline-element-icon'
        iconStyle={{ background: '#3a1f7599', color: '#fff' }}
        icon={<WorkIcon />}
    >
        <div className='timeline-titles'>
        <h3 className="vertical-timeline-element-title">AI & ML Automation Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">VYZA SOLUTIONS PVT LTD</h4>
        </div>
        <p>
        • Developed a Back Test Engine with Multiple Deep Learning Models with the team.<br/>
        • Implemented Time Series models with Real World Data through Q-Learning, LSTM ,Reinforcement Models.<br/>
        • Accelerated development by 40%, delivered multiple fully functional Stock Signalling Models.
        </p>
        <ProjectDock github={"https://github.com/GowthamRaj24/FINANCIAL_MODELS_VYZA"} linkedin={"https://www.linkedin.com/feed/update/urn:li:activity:7173199482128465920/"} certificate={"https://drive.google.com/file/d/1REhx3eZh8XXf0Tq7IFIO_EN5EmSIvlBC/view?usp=drive_link"}/>
    </VerticalTimelineElement>


    <VerticalTimelineElement
        className="vertical-timeline-element--work element"
        contentStyle={{ background: '#3a1f7599', color: '#fff' , width:"600px" , marginLeft:"-100px" }}
        contentArrowStyle={{ borderRight: '7px solid  #3a1f7599' }}
        date="2024 - present , Bengalore , India"   
        iconStyle={{ background: '#3a1f7599', color: '#fff' }}
        icon={<WorkIcon />}
    >
        <div className='timeline-titles'>
        <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">FEYNN LABS</h4>
        </div>
        <p>
        • Prepared a Report on Product Idea which will Primarily use ML and AI to solve real world business problems.<br/>
        • Used Data Analysis techniques to Segment Real World Business Markets and Industries based on market variables.<br/>
        • Worked with a team of 5members and learnt how to deal with Real World Data.
        </p>
        <ProjectDock/>
    </VerticalTimelineElement>

    
    <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
    />
    </VerticalTimeline>
)};

export default Timeline;
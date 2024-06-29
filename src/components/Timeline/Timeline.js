import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';



const Timeline = () => {
return (
    <VerticalTimeline>
    

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present , Bengalore , India"   
        iconClassName = "vertical-timeline-element-icon"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' , fontSize: '20px'}}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Summer Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">MURTI Labs</h4>
        <p className="">
        • Part of developing a simulation tool of a coconut farm environment using AR/VR Tool, Designing arm for coconut harvesting.<br/>
        • Coconut Farm Modelling using Computer Vision, AI and ML  and a few problems on city planning.<br/>
        • We are in the process of organizing a training session on Drone piloting by Clear Water Dynamics for the GITAM family and you will be part of it. 
        </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present , Bengalore , India"   
        iconClassName='vertical-timeline-element-icon'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">AI & ML Automation Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">VYZA SOLUTIONS PVT LTD</h4>
        <p>
        • Developed a Back Test Engine with Multiple Deep Learning Models with the team.<br/>
        • Implemented Time Series models with Real World Data through Q-Learning, LSTM ,Reinforcement Models.<br/>
        • Accelerated development by 40%, delivered multiple fully functional Stock Signalling Models.
        </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present , Bengalore , India"   
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">FEYNN LABS</h4>
        <p>
        • Prepared a Report on Product Idea which will Primarily use ML and AI to solve real world business problems.<br/>
        • Used Data Analysis techniques to Segment Real World Business Markets and Industries based on market variables.<br/>
        • Worked with a team of 5members and learnt how to deal with Real World Data.
        </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2025"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">BTECH : CSE - (AI & ML) Student</h3>
        <h4 className="vertical-timeline-element-subtitle">Gitam University</h4>
        <p>
        • Highly motivated B.Tech CSE - AI& ML Student passionate about Computer Vision and NLP.<br/>
        • Skilled in Machine Learning, DeepLearning, Web-Development, and DSA, with problem-solving, logical thinking, data-driven decision-making skills. <br/>
        • Committed to continuous learning and growth.
        </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="November 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">Sasi Junior College</h3>
        <h4 className="vertical-timeline-element-subtitle">Higher School , MPC</h4>
        <p>
        Creative Direction, User Experience, Visual Design
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
    >
        <h3 className="vertical-timeline-element-title">Sri Chaitanya Techno School</h3>
        <h4 className="vertical-timeline-element-subtitle">SSC , Schooling</h4>
        <p>
        Creative Direction, Visual Design
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
    />
    </VerticalTimeline>
)};

export default Timeline;
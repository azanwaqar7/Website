"use client"

import { Description } from "@radix-ui/react-dialog";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPython,
    FaPowerBi,
    FaTableau,
    FaSQL,
    FaDatabase,
    FaCloud,
    FaChartLine,
    FaChartPie,
} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs} from "react-icons/si";




//about data
const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis, temporibus natus esse et eligendi adipisci',
    info:[
        {
            fieldName: "Name",
            fieldValue: "Azan Waqar"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+92)-3454553100"
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "azanwaqar7@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English"
        },
    ]
};

//experience data
const experience ={
    icon: 'assets/work/photos.png',
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis, temporibus natus esse et eligendi adipisci",
    items: [
        {
            company: "Motive",
            position: "GTM Intelligence & Operations Analyst II",
            duration: "December 2023 - Present"
        },
        {
            company: "Ascend Analytics (Private) Limited",
            position: "Senior Business Intelligence Analyst",
            duration: "April 2023 - November 2023"
        },
        {
            company: "Ascend Analytics (Private) Limited",
            position: "Business Intelligence Analyst",
            duration: "April 2021 - March 2023"
        },

    ]
};

//education data
const education ={
    icon: 'assets/work/photos.png',
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis, temporibus natus esse et eligendi adipisci",
    items: [
        {
            institution: "Fast - National University of Computer & Emerging Sciences, Lahore, Pakistan",
            degree: "MS Data Science",
            duration: "September 2020 - June 2023"
        },
        {
            institution: "Comsats University, Lahore Campus, Pakistan",
            degree: "BSc Electrical & Electronics Engineering",
            duration: "March 2015 - March 2019"
        },
        {
            institution: "Al-Majd International School, Dammam, KSA",
            degree: "O Levels & A Levels",
            duration: "2012 - 2014"
        },

    ]
};

//skills data
const skills ={
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis, temporibus natus esse et eligendi adipisci",
    skillList :[
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaDatabase />,
            name: "SQL"
        },
        
        {
            icon: <FaChartPie />,
            name: "Snowflake"
        }
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@radix-ui/react-tooltip";

import {ScroolArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Resume = () => {
    return <motion.div 
        initial={{opacity:0}} 
        animate = {{
            opacity:1, 
            transition:{delay:2.4, duration: 0.4, ease: 'easeIn'}
        }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
        > 
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className ="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className = "min-h-[70vh] w-full">
                    {/* Experience */}
                    <TabsContent value = "experience" className = "w-full">
                        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{experience.title}</h3>
                            <p className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className = "h-[400px] max-w-[1000px]">
                                <ul className = "grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                                    {experience.items.map((item, index)=>{
                                        return <li key = {index} className = "bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-left lg-items-start gap-1">
                                            <span className = "text-accent lg:text-left">{item.duration}</span>
                                            <h3 className = "text-xl text-center lg:text-left mx-auto xl:mx-0">{item.position}</h3>
                                            <div className = "flex items-center gap-3 mx-auto xl:mx-0">
                                                {/*dot */}
                                                <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className = "text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value = "education" className = "w-full">
                    <div className = "flex flex-col gap-[25px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{education.title}</h3>
                            <p className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className = "h-[400px] max-w-[1000px]">
                                <ul className = "grid grid-cols-1 lg:grid-cols-1 gap-[20px]">
                                    {education.items.map((item, index)=>{
                                        return <li key = {index} className = "bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-left lg-items-start gap-1">
                                            <span className = "text-accent lg:text-left">{item.duration}</span>
                                            <h3 className = "text-xl text-center lg:text-left mx-auto xl:mx-0">{item.degree}</h3>
                                            <div className = "flex items-center gap-3 mx-auto xl:mx-0">
                                                {/*dot */}
                                                <span className = "w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                <p className = "text-white/60 text-xs">
                                                {item.institution}
                                                </p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value = "skills" className = "w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className = "text-4xl font-bold">{skills.title}</h3>
                                <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className ="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill,index)=>{
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className = "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className = "text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className = "capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    
                    </TabsContent>
                    {/* About me */}
                    <TabsContent value = "about" className = "w-full text-center xl:text-left">
                        <div className = "flex flex-col gap-[30px]">
                            <h3 className = "text-4xl font-bold">{about.title}</h3>
                            <p className ="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className = "grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item,index)=>{
                                    return <li key={index} className = "flex items-center justify-center xl:justify-start gap-4">
                                        <span className = "text-white/60">{item.fieldName}</span>
                                        <span className = "text-xl">{item.fieldValue}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
        </motion.div>
};

export default Resume
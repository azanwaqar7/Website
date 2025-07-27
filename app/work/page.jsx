"use client"

import { BsFileEarmarkText } from "react-icons/bs";

import {motion} from 'framer-motion'
import React, {useState} from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';



const projects = [
    {
        num: '01',
        category: 'HR Dashboard',
        title: 'project 1',
        description: 'The comprehensive HR dashboard analyzes workforce data, featuring summary views on overall metrics, demographics, and income analysis, alongside detailed employee records that allow filtering by various attributes for in-depth insights and informed decision-making.',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "Tableau"}],
        image: '/assets/work/HR_.png',
        live:"https://public.tableau.com/views/HR_Dashboard_17270318611100/HRSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        github: "https://github.com/azanwaqar7",

    },

    {
        num: '02',
        category: 'FMCG Dashboard',
        title: 'project 2',
        description: 'The FMCG dashboard provides an in-depth analysis of brands and products within various categories. It features summary views highlighting overall sales performance, demographic trends, and order patterns. Users can filter data by specific attributes to gain insights into brand and product performance, uncover correlations, and identify best-selling items.',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "Tableau"}],
        image: '/assets/work/FMCG_.png',
        live:"https://public.tableau.com/views/FMCG_Dashboard_17276289157210/FMCGDashboardOverview?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        github: "https://github.com/azanwaqar7",

    },

    {
        num: '03',
        category: 'Food & Beverage Dashboard',
        title: 'project 3',
        description: 'Developed interactive dashboards for Brand and Product Dossiers, as well as Trends and Rankings, enabling data-driven insights across key FMCG metrics. The Brand Dossier includes performance, scorecards, demographics, peer comparisons, and customer feedback through ratings and reviews. The Product Dossier provides a detailed view of individual product performance, customer demographics, and comparative analytics. Additionally, the Trends and Rankings module features dynamic dashboards such as the Search & Order Trend Monitor, Category Insight, and Brand Intelligence, helping stakeholders identify market movements, category performance, and brand positioning in real time.',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "Sisense"}, {name: "Amazon QuickSight"} , {name: "Amazon Redshift SQL"}  ],
        image: '/assets/work/Food_Bev.png',
        live:"/assets/work/Portfolio_compressed.pdf",
        github: "https://github.com/azanwaqar7",
        pdf: "/assets/work/Portfolio_compressed.pdf"

    },
    /*
    {
        num: '04',
        category: 'Health Sector Data Analysis',
        title: 'project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus voluptate ipsum esse repudiandae ',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "PowerBI"}],
        image: '/assets/work/photos.png',
        live:"",
        github: "",

    },

    {
        num: '05',
        category: 'Marketing Analytics',
        title: 'project 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus voluptate ipsum esse repudiandae ',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "PowerBI"}, {name:"Tableau"}],
        image: '/assets/work/photos.png',
        live:"",
        github: "",

    },

    {
        num: '06',
        category: 'Finance Analytics',
        title: 'project 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus voluptate ipsum esse repudiandae ',
        stack: [{name: "SQL"},{name: "Excel"}, {name: "PowerBI"}, {name:"Tableau"}],
        image: '/assets/work/photos.png',
        live:"",
        github: "",
    },*/


]


const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return <motion.section initial ={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease: 'easeIn' }}} className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className = "flex flex-col gap-[30px] h[50%]">
                        {/* outline num */}
                        <div className = "text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                        </div>
                        {/*Project Category */}
                        <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project
                
                        </h2>
                        {/*Project description */}
                        <p className = "text-white/60">{project.description}</p>
                        {/*stack */}
                        <ul className = "flex gap-4">
                            {project.stack.map((item,index)=>{
                                return <li key={index} className = "text-xl text-accent">
                                    {item.name}
                                    {/*Removes the last comma */}
                                    {index !== project.stack.length -1 && ","}
                                    </li>
                            })}
                        </ul>
                        {/*border */}
                        <div className = "border border-white/20"></div>
                        {/*Buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <Link href = {project.live}>
                                <TooltipProvider delayduration ={100}>
                                    <Tooltip>
                                        <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight  className='text-white text-3xl group-hover:text-accent'/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href = {project.github}>
                                <TooltipProvider delayduration ={100}>
                                    <Tooltip>
                                        <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub  className='text-white text-3xl group-hover:text-accent'/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {project.pdf && (
                             <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayduration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <BsFileEarmarkText className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                            <TooltipContent><p>View PDF</p></TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                             </a>
                            )}

                        </div>
                    </div>
                </div>
                <div className = "w-full xl:w-[50%]">
                    <Swiper spaceBetween = {30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange = {handleSlideChange}>
                        {projects.map((project,index)=>{
                            return <SwiperSlide key={index} className = "w-full">
                                <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/*overlay*/}
                                <div className = "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/*image*/}
                                <div className = "relative w-full h-full">
                                    <Image src={project.image} fill className = "object-cover" alt = ""/>
                                </div>
                                {/* Project Info Overlay */}
                                <div className="absolute z-20 bottom-4 left-4 text-white space-y-2 bg-black/50 p-4 rounded-xl max-w-[90%]">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm opacity-80">{project.category}</p>

                                {project.pdf && (
                                <a
                                href={project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-xs underline text-blue-300 hover:text-blue-100"
                                >
                                View Portfolio PDF
                                </a>
                                )}
                                </div>

                                </div>
                            </SwiperSlide>;
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns 
                        containerStyles = "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles = "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
};

export default Work
"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from "next/link";

const services = [
    {
        num:'01',
        title: 'Data Analysis',
        description: 'Data analysis services examine trends, growth, and overall insights, enabling your company to resolve business challenges through informed decision-making and effective visualization with advanced tools, enhancing understanding and strategic planning.',
        href :""
    },
    {
        num:'02',
        title: 'Database Management',
        description: 'Database management services ensure your data is expertly structured and integrated, with timely updates to incorporate new information and efficient data creation, enhancing accessibility and reliability for your organization’s needs.',
        href :""
    },
    {
        num:'03',
        title: 'SQL Programming',
        description: 'SQL programming services ensure your data queries are optimized and well-structured, enabling efficient data retrieval that addresses business challenges. By delivering clean and accessible data, we empower your organization to conduct thorough analysis and drive informed decision-making.',
        href :""
    },
    {
        num:'04',
        title: 'Python Programming',
        description: 'Python programming services provide robust data structuring and analysis, utilizing various relevant libraries for efficient data manipulation. We also leverage visualization libraries to effectively showcase your data, empowering informed decision-making and insights for your organization.',
        href :""
    }
];

import {motion} from "framer-motion"

const Services = () => {
    return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"> {/* Creates a gap/space between Azan. and Services page */}
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity:1, 
                transition:{delay:2.4, duration: 0.4, ease:"easeIn"},
         }}
         className = "grid grid-cols-1 md:grid-cols-2 gap-[60px]"
         >
            {services.map((service,index)=> {
                return <div key = {index} className = "flex-1 flex flex-col justify-center gap-6 group">
                    {/* top */}
                    <div className = "w-full flex justify-between items-center">
                        <div  className = "text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500" >
                            <Link href = {service.num} >{service.num}</Link> 
                            {/*{service.num} */} {/* remove above line if issue occurs and replace it with service.num */}
                        </div> {/* THis makes 01,02,03 the way it is and it's using .text-outline from the function in global css file */}
                        <Link href = {service.href} className = "w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className ="text-primary text-3xl"/>
                        </Link>
                    </div>
                    {/*title */}
                    <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    {/* description */}
                    <p className = "text-white/60">{service.description}</p>
                    {/* border */}
                    <div className = "border-b border-white/20 w-full"></div>
                </div>
            })}
         </motion.div>
        </div>  {/*aligns Services page with Azan. at the top left */}
    </section>;
};

export default Services
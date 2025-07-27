import Link from "next/link"

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const Socials = [
    {icon : <FaGithub />, path: 'https://github.com/azanwaqar7'},
    {icon : <FaLinkedin />, path: 'https://www.linkedin.com/in/azanwaqar/'},
    {icon : <FaYoutube />, path: ''},
]

const Social = ({containerStyles,iconStyles}) => {
    return (<div className={containerStyles}>
        {Socials.map((item,index) =>{
            return <Link key ={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
    );
};

export default Social;
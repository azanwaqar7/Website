"use client";
import Link from "next/link"; // adding a link need this
import { usePathname } from "next/navigation"; // using names with links to name the links basically we use this

const links = [ // links variable is created with path and names
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const Nav = () => {    // Nav bar just below Azan.
    const pathname = usePathname();
    //console.log(pathname); {/* Refreshes the console on refreshing the page */}
    
    return ( 
        <nav className="flex gap-8"> {/* Gap between pathname and links*/}
            {links.map((link, index)=>{  {/* Mapping links here with pathnames as defined above */}
                return (
                    <Link href={link.path} 
                            key ={index} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                            } capitalize font-medium hover:text-accent transition-all`}
                            > {/*This adds the underline green color on pathnames and it makes the text green that is selected  
                                On hover, the color changes to accent that is described in a file as green and transition effect is 
                                applied*/}
                        {link.name}
                    </Link>
            );
        })}
    </nav>
    );
};

export default Nav;
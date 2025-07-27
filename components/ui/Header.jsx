import Link from "next/link";  // Imported Next Link 
import { Button } from "./button";
import MobileNav from "./MobileNav";


//components
import Nav from "./Nav";

const Header = () => {
    return ( 
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center"> {/*Justify between item center creates a gap between Azan. and Hire me */}
            {/*logo*/}
            <Link href = "/">
                <h1 className="text-4xl font-semibold">
                Azan <span className ="text-accent">.</span>
                </h1>
            </Link>

           
            {/*desktop nav & hire me button*/ } 
            <div className="hidden xl:flex items-center gap-8">   {/*this hides the nav bar below Azan when the window is shortened/squeezed*/}
            <Nav />
            <Link href ="/contact">
                <Button>Hire me</Button>
            </Link>
            </div>

            {/*mobile nav*/}
            <div className="xl:hidden">
                <MobileNav />

                </div> {/*on squeezing the window it shows mobile nav as text*/ }

        </div>
    </header>
    );
};

export default Header;
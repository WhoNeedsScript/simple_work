import Container from "../Container";
import Logo from "./Logo";

interface NavbarProps{
    children: React.ReactNode;
    width?:Number;
    height?:Number;
}

const Navbar:React.FC<NavbarProps> =({
    children,
    width,
    height
})=>{
    return(
        <div 
            className="
                text-center
                flex-shrink-0 
                flex-basis-auto
                min-h-full
                w-23
              bg-white 
                bg-opacity-40
                rounded-2xl 
                shadow-5xl
                z-2 
                border 
                border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"
        >
            <div 
                className="
                
                border-b-[1px]"
            >
                <Container>
                    <div
                        className="
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          md:gap-0"
                    >
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Navbar;

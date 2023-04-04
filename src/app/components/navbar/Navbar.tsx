import Container from "../Container";
import Logo from "./Logo";

const Navbar=()=>{
    return(
        <div 
            className="
                fix 
                h-full 
                w-40
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
                py-4 
                border-b-[1px]"
            >
                <Container>
                    <div
                        className="
                          flex
                          flex-row
                          items-center
                          justify-center
                          gap-3
                          md:gap-0"
                    >
                        <Logo/>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Navbar;
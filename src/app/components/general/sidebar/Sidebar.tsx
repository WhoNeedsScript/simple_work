import Container from "../../Container";
import Button from "../../glassmorph/Button";
import Logo from "./Logo";

interface SidebarProps{
    children: React.ReactNode;
    width?:Number;
    height?:Number;
}

const Sidebar:React.FC<SidebarProps> =({
    children,
    width,
    height
})=>{
    return(
        <div className="flex flex-col gap-3"> 
         {children}
        </div>
    )
}
export default Sidebar;

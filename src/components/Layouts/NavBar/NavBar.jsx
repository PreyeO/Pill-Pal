import Logo from "../../../assets/Logo.svg"
import AccountBtn from "../../UI/Buttons/AccountBtn"


const NavBar = () => {




    return(
        <nav>
            <div className="flex justify-around h-[120px] text-center items-center">
            <div className="flex gap-2 cursor-pointer">
            <img src={Logo} alt="logo" className="w-[48px] h-[48px]"/>
            <h3 className="text-black font-bold pt-3">Pill<span className="text-[#55AAFF]">Pal</span></h3>
            </div>
            <ul className="flex gap-5 font-bold cursor-pointer">
                <li>For Patients</li>
                <li>For Providers</li>
               
            </ul>
            <div className="cursor-pointer">
                <AccountBtn label="Account"/>
            </div>
            </div>
        </nav>
    )
}

export default NavBar
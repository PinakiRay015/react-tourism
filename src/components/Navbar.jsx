import React , {useState} from "react";
import { IoClose , IoMenu } from "react-icons/io5";
import { brandLogo } from "../utils";
import { navitems } from "../constants";
const Navbar = () => {

  const [navbarMenu, setNavbarMenu] = useState("translate-x-[-100%]")

  const openNav = () =>{
      setNavbarMenu("translate-x-[0%]")
  }

  const closeNav = () =>{
    setNavbarMenu("translate-x-[-100%]")
  }

  return (
    <div className="w-full h-fit border-b">
      <div className="max-w-screen-xl h-[10vh] mx-auto flex items-center justify-between px-3">
        <img className="cursor-pointer" src={brandLogo} alt="" />
        <nav className="hidden sm:flex gap-6 items-center">
          {navitems.map((Element, id) => (
            <p
              className="text-black text-md font-semibold cursor-pointer"
              key={id}
            >
              {Element}
            </p>
          ))}

          <div className="buttons flex gap-6">
            <button className="border border-[#EB662B] px-2 py-1 rounded-[200px] text-[#EB662B] font-semibold">
              Sign up
            </button>
            <button className="bg-[#EB662B] rounded-[200px] text-white px-2 py-1 font-semibold">
              Log in
            </button>
          </div>
        </nav>
        <p onClick={openNav} className="sm:hidden text-3xl" ><IoMenu/></p>
      </div>


      <div className={`${navbarMenu} px-4 w-[93vw] h-screen sm:hidden bg-orange-100 absolute z-10 top-0 py-7 transition ease-out duration-200`} >
          <header className="w-full flex justify-end" >
              <p onClick={closeNav} className="text-4xl font-bold" ><IoClose/></p>
          </header>

          <nav className="pt-16" >
            {navitems.map((Element , id)=>{
              return(
                <div key={id} className="border bg-orange-300 px-3 py-6 my-5 rounded-xl" >
                  <p className="text-lg font-semibold" >{Element}</p>
                </div>
              )
            })}
          </nav>
      </div>
    </div>
  );
};

export default Navbar;

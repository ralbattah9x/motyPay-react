import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { appRoutesObj } from "src/app.paths";
import i18n from "src/core/configs/i18n";
import Button from "./button";
import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

interface IRoutes {
    routeTitle: string,
    pageRoute: string,
}

const routes: IRoutes[] = [
    {
        routeTitle: "nav.bar.contact.us",
        pageRoute: appRoutesObj.getContactUsPagePath()
    },
    {
        routeTitle: "nav.bar.services",
        pageRoute: appRoutesObj.getPaymentPagePath()
    },
    {
        routeTitle: "nav.bar.payment",
        pageRoute: appRoutesObj.getServicesPagePath()
    },
    {
        routeTitle: "nav.bar.about.us",
        pageRoute: appRoutesObj.getBasePath()
    },
]
const changeLanguage = () => {
    if (i18n.language === "ar") {
        i18n.changeLanguage("en");
        localStorage.setItem("language", "en");
    } else {
        i18n.changeLanguage("ar");
        localStorage.setItem("language", "ar");
    }
};

function NavBar() {
    const [open,setOpen] = useState<Boolean>(false)
    const { t } = useTranslation();
    return (


        <div className="container mx-auto flex  sm:justify-start ">
            <div className={`flex  justify-between sm:flex-col sm:h-screen sm:w-1/2 h-[72px] w-full items-center bg-white sm:bg-[#f3f5ed]  sm:justify-start sm:items-start sm:gap-[50px] px-[16px] sm:pt-[57px] ${open ? '' : 'sm:hidden'}`}>
            <div className="flex justify-end items-end w-full 2xl:hidden xl:hidden lg:hidden md:hidden ">
                    <CgClose onClick={() => setOpen(false)} className="text-[30px] text-whiteColor" />
                </div>
            <div className="flex items-center ">
                        <div className=" flex  items-center sm:flex-col sm: gap-0 ">
                            <Button buttonSize={"w-[153px] h-[47px]"} textColor={"text-darkGreen"} text={t('nav.bar.join.us')} color={"bg-buttonLight"} onClick={()=>(console.info)}/>
                            <Button buttonSize={"w-[153px] h-[47px]"} textColor={"text-lightGreen"} text={t('home.page.English')} color={"bg-white"} onClick={()=>(changeLanguage())}/>
                        </div>
                       
                    </div>

                <div className="flex items-center  gap-[100px] sm:flex-col">
                    
                    <nav className="flex gap-[40px] md:gap-3 md:text-[12px] font-subTitle sm:flex-col ">
                        {
                            routes.map((items, index) => {
                                return <NavLink key={index} to={items.pageRoute}>
                                    <h2 className="text-subTitle "> {t(items.routeTitle)}</h2>
                                </NavLink>
                            })
                        }
                    </nav>

                    <div className="flex">
                        <img src="/assets/images/logoM.png" alt="" className="w-[89px] h-[27px] " />
                    </div>
                </div>

                

            </div>

            {
                open ? <div></div>
                    :
                    <HiOutlineMenuAlt4 onClick={() => setOpen(true)} className="text-[30px] text-black 2xl:hidden xl:hidden lg:hidden md:hidden" />
            }

        </div>



    );
}

export default NavBar;
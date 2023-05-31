import { t, changeLanguage } from "i18next";
import Button from "src/components/user/button";
import Layout from "src/components/user/layout";
import Text from "src/components/user/text";

function AboutUsPage() {
    return (

        <div className="flex gap-[95px] justify-evenly sm:justify-center sm:items-center sm:flex-col md:pt-[100px] md:pr-5 md:pl-5 xl:p-5 lg:p-5 sm:p-3">

            <div className="pt-[100px]  ">
                <img className=" h-[800px] sm:h-[400px] md:h-[600px]  " src="/assets/images/card.png" alt="" />
            </div>
            <div className="flex flex-col items-end gap-5 pt-[150px] sm:pt-[10px]  md:items-end lg:items-end xl:items-end ">
                <Text text={t("home.page.subTitle1")} textFont="font-subTitle" textSize="text-[14px]" color="text-lightGreen" />
                <div className="flex flex-col items-end md:items-end lg:items-end ">
                    <Text text={t("home.page.title1")} textFont="font-title" textSize="text-[64px] sm:text-[40px] md:text-[35px] lg:text-[45px] xl:text-[45px] " color="font-black" />
                    <Text text={t("home.page.title2")} textFont="font-title" textSize="text-[64px] sm:text-[40px] md:text-[35px] lg:text-[45px] xl:text-[45px] " color="font-black" />
                </div>
                <div className="flex flex-col items-end ">
                    <Text text={t("home.page.subTitle2")} textFont="font-regTitle" textSize="text-[20px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[14px]" color="text-black" />
                    <Text text={t("home.page.subTitle3")} textFont="font-regTitle" textSize="text-[20px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[14px]" color="text-black" />
                </div>

                <div className=" flex  items-center sm:flex-col sm: gap-5 pt-10 sm:items-end">
                    <Button buttonSize={"w-[114px] h-[50px]"} textColor={"text-[#5A5A5A]"} text={t("home.page.learn.more")} color={"bg-grey"} onClick={() => (console.info)} />
                    <Button buttonSize={"w-[153px] h-[47px] sm:w-[160px]"} textColor={"text-white"} text={t("home.page.download")} color={"bg-lightGreen"} onClick={() => (changeLanguage())} />

                </div>
                <div className="pt-[96px] items-end flex flex-col">
                    <div className=" font-regTitle  text-[#BFBFBF] text-[16px] pb-[14px]">
                     {t("home.page.supported")}
                    </div>
                    <div className="flex flex-row-reverse gap-8">
                        <img src="/assets/images/PayPal_Logo_Grey logo.png" alt="" className="h-[18px] w-[73px] "/>
                        <img src="/assets/images/microsoft logo.png" alt="" className="h-[18px] w-[73px]"/>
                        <img src="/assets/images/visa logo.png" alt="" className="h-[18px] w-[73px]" />
                        <img src="/assets/images/walmart logo.png" alt="" className="h-[18px] w-[73px]"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutUsPage;
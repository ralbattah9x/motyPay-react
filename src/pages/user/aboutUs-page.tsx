import { t, changeLanguage } from "i18next";
import Button from "src/components/user/button";
import Layout from "src/components/user/layout";
import Text from "src/components/user/text";

function AboutUsPage() {
    return (

        <div className="flex gap-[95px] justify-evenly sm:justify-center sm:items-center sm:flex-col md:pt-[100px] md:pr-5 md:pl-5">

            <div className="pt-[100px]  ">
                <img className=" h-[800px] sm:h-[400px] md:h-[600px]  " src="/assets/images/card.png" alt="" />
            </div>
            <div className="flex flex-col items-end gap-5 pt-[150px] sm:pt-[10px]  md:items-end ">
                <Text text="👍 Meet the credit card of the future " textFont="font-subTitle" textSize="text-[14px]" color="text-lightGreen" />
                <div className="flex flex-col items-end md:items-end ">
                    <Text text="Financial Future" textFont="font-title" textSize="text-[64px] sm:text-[40px] md:text-[35px]" color="font-black" />
                    <Text text="In a Single Card" textFont="font-title" textSize="text-[64px] sm:text-[40px] md:text-[35px]" color="font-black" />
                </div>
                <div className="flex flex-col items-end">
                    <Text text=".Meet the new standard for a modern card platform " textFont="font-regTitle" textSize="text-[20px] md:text-[12px]" color="text-black" />
                    <Text text="!Transform your financial future, manage it now  " textFont="font-regTitle" textSize="text-[20px] md:text-[12px]" color="text-black" />
                </div>

                <div className=" flex  items-center sm:flex-col sm: gap-5 pt-10 sm:items-end">
                    <Button buttonSize={"w-[114px] h-[50px]"} textColor={"text-[#5A5A5A]"} text={"learn more"} color={"bg-grey"} onClick={() => (console.info)} />
                    <Button buttonSize={"w-[153px] h-[47px] sm:w-[160px]"} textColor={"text-white"} text={"Download >>"} color={"bg-lightGreen"} onClick={() => (changeLanguage())} />

                </div>
                <div className="pt-[96px] items-end flex flex-col">
                    <div className=" font-regTitle  text-[#BFBFBF] text-[16px] pb-[14px]">
                     Our Supported Partners
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
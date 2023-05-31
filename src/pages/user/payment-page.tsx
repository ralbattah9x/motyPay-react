import { t, changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import Button from "src/components/user/button";
import Layout from "src/components/user/layout";
import Text from "src/components/user/text";

function PaymentPage() {
    const {t} = useTranslation()
    return ( 
        <Layout>
           
            <div className="items-center justify-center bg-[#F8F8F8] h-screen ">
            <div className="flex pt-[200px] gap-[85px] justify-evenly sm:justify-center sm:items-center sm:flex-col md:pt-[100px] md:pr-5 md:pl-5 xl:p-5 lg:p-5 lg:pt-[150px] xl:pt-[150px]">

<div className=" flex flex-col items-end justify-center gap-5 ">
     <div className="bg-lightGreen h-[29px] w-[102px]  rounded-[20px] ">
     <p className="text-[14px] font-subTitle justify-center items-center text-white text-center">{t("payment.page.services")}</p>
     </div>
     
     <div className="flex flex-col items-end ">
                    <Text text={t("payment.page.title1")} textFont="font-title" textSize="text-[42px] md:text-[30px] lg:text-[30px] xl:text-[30px]" color="text-black" />
                    <Text text={t("payment.page.title2")} textFont="font-title" textSize="text-[42px] md:text-[30px] lg:text-[30px] xl:text-[30px]" color="text-black" />
                </div>


                <div className="flex flex-col items-end ">
                    <Text text={t("payment.page.subTitle1")} textFont="font-regTitle" textSize="text-[18px] md:text-[30px] lg:text-[25px] xl:text-[25px]" color="text-black" />
                    <Text text={t("payment.page.subTitle2")} textFont="font-regTitle" textSize="text-[18px] md:text-[30px] lg:text-[25px] xl:text-[25px]" color="text-black" />
                </div>



                <div className=" flex  items-center sm:flex-col sm: gap-5 pt-10 sm:items-end">
                   
                    <Button buttonSize={"w-[153px] h-[47px] sm:w-[160px] border-lightGreen border-2"} textColor={"text-black"} text={t("home.page.learn.more")} color={"bg-grey"} onClick={() => (changeLanguage())} />

                </div>
   
</div>
<div className="grid grid-cols-2 gap-[54px] ">
    
    <div className="bg-white gap-[24px] h-[180px] w-[180px] rounded-[15px] flex justify-center items-center flex-col">
        <img src="/assets/icons/bi_credit-card-2-front.png" alt="" className="h-[24px] w-[18px]  items-center justify-center" />
        <Text text={t("payment.page.card1")} color="text-black" textFont="font-subTitle" textSize="text-[18px]" />
    </div>
    <div className="bg-black h-[180px] w-[180px] rounded-[15px] flex justify-center items-center ">
        <img src="/assets/icons/fluent_wallet-credit-card-32-filled.png" alt="" className="h-[40px] w-[40px]  items-center justify-center"/>
    </div>
    <div className="bg-white gap-[24px] h-[180px] w-[180px] rounded-[15px] flex justify-center items-center flex-col">
        <img src="/assets/icons/solar_wallet-money-linear.png" alt="" className="h-[24px] w-[18px]  items-center justify-center" />
        <Text text={t("payment.page.card2")} color="text-black" textFont="font-subTitle" textSize="text-[18px]" />
    </div>
    <div className="bg-white gap-[24px] h-[180px] w-[180px] rounded-[15px] flex justify-center items-center flex-col">
        <img src="/assets/icons/solar_hand-money-outline.png" alt="" className="h-[24px] w-[18px]  items-center justify-center" />
        <Text text={t("payment.page.card3")} color="text-black" textFont="font-subTitle" textSize="text-[18px]" />
    </div>
   
   

</div>
</div>
                </div>
           
        </Layout>
     );
}

export default PaymentPage;
import Layout from "src/components/user/layout";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import Text from "src/components/user/text";
import { useTranslation } from "react-i18next";

function ContactUsPAge() {
  const {t} = useTranslation()
    return ( 
       <Layout>
         <div className="gap-[50px] h-screen flex items-center justify-center flex-col">
           <div>
            <FiPhoneCall className="h-[50px] w-[50px]"/>
           </div>
           <div className="items-center flex flex-col">
           <div className="" >
            <Text text={t("contact.page")} color="text-black" textFont="font-regTitle" textSize="text-[18px]" /> 
           </div>
           <div className="">
            <Text text={t("contact.page.day")} color="text-black" textFont="font-regTitle" textSize="text-[18px]" /> 
           </div>
           <div className="">
            <Text text={t("contact.page.phone")} color="text-black" textFont="font-regTitle" textSize="text-[18px]" /> 
           </div>
           </div>
        </div>
       </Layout>
     );
}

export default ContactUsPAge;
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "src/components/user/layout";

function ServicesPage() {
    const {t} = useTranslation()
    return (
        <Layout>

            <div className="h-screen flex items-center justify-center  ">
                <p className="text-[42px] items-center font-title"> {t("services.page.not")}</p>
            </div>
        </Layout>
    );
}

export default ServicesPage;
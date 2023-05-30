import { useTranslation } from "react-i18next";
import Layout from "./components/user/layout";
import AboutUsPage from "./pages/user/aboutUs-page";


function App() {

  const {t} = useTranslation();

  return (
    <Layout>
      <AboutUsPage/>
    </Layout>
  );
}

export default App;
